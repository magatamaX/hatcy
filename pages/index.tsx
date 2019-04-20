import Layout from '../components/Layout/index'
import Kv from '../components/index/Kv/index'
import Information from '../components/index/information/index'
import Profile from '../components/index/profile/index'
import Performance from '../components/index/performance/index'
import Contact from '../components/index/contact/index'
import React from 'react'

interface Props {
  list: any[]
}
interface State {
  currentVideo: string,
}

class Top extends React.Component<Props, State> {

  constructor( props: any ) {
    super(props)

    console.log(props)

    this.state = {
      currentVideo: props.list[0].snippet.resourceId.videoId
    }
  }

  static async getInitialProps() {
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
    console.log('ahahaha')

    return { list: result.items }
  }

  onChangeVideo(id: string) {
    console.log(`選択したビデオIDは${id}です。`)

    this.setState( () => {
      return {
        currentVideo: id
      }
    })
  }

  render() {
    console.log(this.state.currentVideo)
    return (
      <Layout>
        <Kv />
        <Information />
        <Profile />
        <Performance
          list={this.props.list}
          current={this.state.currentVideo}
          onChangeVideo={(id) => this.onChangeVideo(id)}
        />
        <Contact />
      </Layout>
    )
  }
}

export default Top