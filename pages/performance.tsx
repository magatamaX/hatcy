import Layout from '../components/Layout/index'
import Titlebox from '../components/common/Titlebox/index'

const Performance = ({ list } : { list: any })=> {
  console.log(list)
  return (
    <Layout>
      <section>
        <Titlebox text="パフォーマンス" engText="Performance" />
        <ul>
          {list.map((item, i) => (
            <li key={i}>
              <p>{item.snippet.title}</p>
              <p><img src={item.snippet.thumbnails.medium.url} alt="" /></p>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

Performance.getInitialProps = async function() {

  const url = 'https://www.googleapis.com/youtube/v3/playlistItems'
  const playlistId = 'PL8Mym-l4uq978vdSETUg4B4VLKoVU2pW-'

  const params = new URLSearchParams()
  params.set('part', 'snippet')
  params.set('playlistId', playlistId)
  params.set('maxResults', 20)
  params.set('key', 'AIzaSyAmg-DMiJAYOHX08aDQyy7dylhXvnmXmPo')

  const res = await fetch(url + '?' + params.toString())
  const result = await res.json()

  console.log(result);

  return { list: result.items }
}

export default Performance