import Layout from '../components/Layout'
import Link from 'next/link'

function getPosts() {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
  ]
}

const PostLink = ({ post }) => (
  <li>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>
  </li>
)

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <div className="f-flex">
        <div className="f-flex6">aaaa</div>
        <div className="f-flex6">aaarr</div>
      </div>
      <ul>
        {getPosts().map(post => (
          <PostLink key={post.id} post={post} />
        ))}
      </ul>
    </Layout>
  )
}