'use client';
import styles from './page.module.css';
import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { allPosts, Post } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Amplitude from '../analytics';

export default function Home() {
  Amplitude()
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <main className={styles.main}>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </main>
  )
}

function PostCard(post) {
  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link href={post.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
          {post.title}
        </Link>
      </h2>
      
      <MDXContent />
    </div>
  )
}