import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { Post } from '../lib/types'

type Props = { post: Post }

export default function PostContent({ post }: Props) {
  const createdAt = typeof post?.createdAt === 'number' ? new Date(post.createdAt) : post.createdAt
  return (
    <div className="card">
      <h1>{post?.title}</h1>
      <span className="text-sm">
        Written by{' '}
        <Link className="text-info" href={`/${post.username}/`}>
          @{post.username}
        </Link>{' '}
        on {createdAt.toISOString()}
      </span>
      <ReactMarkdown>{post?.content}</ReactMarkdown>
    </div>
  )
}