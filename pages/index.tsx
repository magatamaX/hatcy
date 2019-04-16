import Layout from '../components/Layout/index'
import Kv from '../components/index/Kv/index'
import Information from '../components/index/information/index'
import Profile from '../components/index/profile/index'
import Performance from '../components/index/performance/index'
import Contact from '../components/index/contact/index'

export default function Top() {
  return (
    <Layout>
      <Kv />
      <Information />
      <Profile />
      <Performance />
      <Contact />
    </Layout>
  )
}