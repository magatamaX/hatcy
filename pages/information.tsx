import Layout from '../components/Layout/index'
import Titlebox from '../components/common/Titlebox/index'
import Items from '../components/information/Items'

const list = [
  {
    img: 'https://unsplash.it/800/600/?image=1084',
    path: '/',
    text: 'ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。',
    date: '2018.2.24',
  },
  {
    img: 'https://unsplash.it/800/600/?image=1083',
    path: '/',
    text: 'ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。',
    date: '2018.2.24',
  },
  {
    img: 'https://unsplash.it/800/600/?image=1077',
    path: '/',
    text: 'ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。',
    date: '2018.2.24',
  },
  {
    img: 'https://unsplash.it/800/600/?image=1069',
    path: '/',
    text: 'ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。',
    date: '2018.2.24',
  },
  {
    img: 'https://unsplash.it/800/600/?image=1070',
    path: '/',
    text: 'ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。',
    date: '2018.2.24',
  },
  {
    img: 'https://unsplash.it/800/600/?image=1036',
    path: '/',
    text: 'ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。',
    date: '2018.2.24',
  },
  {
    img: 'https://unsplash.it/800/600/?image=1027',
    path: '/',
    text: 'ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。',
    date: '2018.2.24',
  },
  {
    img: 'https://unsplash.it/800/600/?image=1016',
    path: '/',
    text: 'ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。',
    date: '2018.2.24',
  },
  {
    img: 'https://unsplash.it/800/600/?image=777',
    path: '/',
    text: 'ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。',
    date: '2018.2.24',
  },
  {
    img: 'https://unsplash.it/800/600/?image=888',
    path: '/',
    text: 'ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。ここに見出しの文章が入ります。',
    date: '2018.2.24',
  },
  {
    img: 'https://unsplash.it/800/600/?image=999',
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