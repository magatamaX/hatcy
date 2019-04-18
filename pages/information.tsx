import Layout from '../components/Layout/index'
import Titlebox from '../components/common/Titlebox/index'
import Items from '../components/information/Items'

const list = [
  {
    img: 'https://unsplash.it/800/600/',
    path: '/',
    text: 'ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。',
    date: '2018.2.24',
  },
  {
    img: 'https://unsplash.it/800/600/',
    path: '/',
    text: 'ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。',
    date: '2018.2.24',
  },
  {
    img: 'https://unsplash.it/800/600/',
    path: '/',
    text: 'ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。',
    date: '2018.2.24',
  },
  {
    img: 'https://unsplash.it/800/600/',
    path: '/',
    text: 'ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。',
    date: '2018.2.24',
  },
  {
    img: 'https://unsplash.it/800/600/',
    path: '/',
    text: 'ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。',
    date: '2018.2.24',
  },
  {
    img: 'https://unsplash.it/800/600/',
    path: '/',
    text: 'ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。',
    date: '2018.2.24',
  },
  {
    img: 'https://unsplash.it/800/600/',
    path: '/',
    text: 'ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。',
    date: '2018.2.24',
  },
  {
    img: 'https://unsplash.it/800/600/',
    path: '/',
    text: 'ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。',
    date: '2018.2.24',
  },
  {
    img: 'https://unsplash.it/800/600/',
    path: '/',
    text: 'ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。',
    date: '2018.2.24',
  },
  {
    img: 'https://unsplash.it/800/600/',
    path: '/',
    text: 'ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。',
    date: '2018.2.24',
  },
  {
    img: 'https://unsplash.it/800/600/',
    path: '/',
    text: 'ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。',
    date: '2018.2.24',
  },
]

export default function Information() {
  return (
    <Layout>
      <section>
        <Titlebox text="お知らせ" engText="Information" />
        <Items list={list} />
      </section>
    </Layout>
  )
}