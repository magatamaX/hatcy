import Layout from '../components/Layout/index'
import Link from 'next/link'
import Kv from '../components/index/Kv/index'

function getPosts() {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
  ]
}

interface Props {
  post: {
    id: string
    title: string
  }
}

const PostLink = ( props: Props ) => (
  <li>
    <Link as={`/p/${props.post.id}`} href={`/post?title=${props.post.title}`}>
      <a>{props.post.title}</a>
    </Link>
  </li>
)

export default function Top() {
  return (
    <Layout>
      <Kv />
      <ul>
        {getPosts().map(post => (
          <PostLink key={post.id} post={post} />
        ))}
      </ul>
    </Layout>
  )
}