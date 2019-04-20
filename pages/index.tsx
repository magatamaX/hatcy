import Layout from '../components/Layout/index'
import Kv from '../components/index/Kv/index'
import Information from '../components/index/information/index'
import Profile from '../components/index/profile/index'
import Performance from '../components/index/performance/index'
import Contact from '../components/index/contact/index'
import React from 'react'
import fetch from 'isomorphic-unfetch'
import { connect } from 'react-redux'
import {
  load, aniKv, aniInformation, aniProfile, aniPerformance, showPageTopBtn, hidePageTopBtn
} from '../store'

interface Props {
  list: any[],
  isAniKvDone: boolean,
  isAniInformationDone: boolean,
  isAniProfileDone: boolean,
  isAniPerformanceDone: boolean
}
interface State {
  currentVideo: string,
}

class Top extends React.Component<Props, State> {

  constructor( props: Props ) {
    super(props)

    console.log(props)

    this.state = {
      currentVideo: props.list[0].snippet.resourceId.videoId
    }
  }

  private kvRef = React.createRef<HTMLDivElement>();
  private informationRef = React.createRef<HTMLDivElement>();
  private profileRef = React.createRef<HTMLDivElement>();
  private performanceRef = React.createRef<HTMLDivElement>();


  static async getInitialProps() {
    const url = 'https://www.googleapis.com/youtube/v3/playlistItems'
    const playlistId = 'PL8Mym-l4uq978vdSETUg4B4VLKoVU2pW-'

    const params: any = new URLSearchParams()
    params.set('part', 'snippet')
    params.set('playlistId', playlistId)
    params.set('maxResults', 20)
    params.set('key', 'AIzaSyAmg-DMiJAYOHX08aDQyy7dylhXvnmXmPo')

    const res = await fetch(url + '?' + params.toString())
    const result = await res.json()

    return { list: result.items }
  }

  onChangeVideo(id: string): void {

    this.setState(() => {
      return {
        currentVideo: id
      }
    })

  }

  ani(): void {

    const targets: any[] = [
      this.kvRef,
      this.informationRef,
      this.profileRef,
      this.performanceRef,
    ]

    const callback = (entries: any) => {

        entries.forEach((entry: any) => {
            
            if ( entry.isIntersecting ) {

                console.log(`${entry.target.id}が見えました。`)
                console.log(entry)
                const key = entry.target.dataset.action
                this.props[key]()
                console.log(`${entry.target.id}の監視を解除します。`)
                observer.unobserve(entry.target);

            }

          });
    }
    const observer = new IntersectionObserver(callback, {
        threshold: [ 0.8 ]
    });

    targets.forEach((target: any) => {
      observer.observe(target.current)
    })
  }

  componentDidMount() {

    this.ani()

  }

  render() {
    console.log(this.state.currentVideo)
    return (
      <Layout>
        <section id="kv" data-action="aniKv" ref={this.kvRef}>
          <Kv isAniKvDone={this.props.isAniKvDone} />
        </section>
        <section id="information" data-action="aniInformation" ref={this.informationRef}>
          <Information isAniInformationDone={this.props.isAniInformationDone} />
        </section>
        <section id="profile" data-action="aniProfile" ref={this.profileRef}>
          <Profile isAniProfileDone={this.props.isAniProfileDone} />
        </section>
        <section id="performance" data-action="aniPerformance" ref={this.performanceRef}>
          <Performance
            isAniPerformanceDone={this.props.isAniPerformanceDone}
            list={this.props.list}
            current={this.state.currentVideo}
            onChangeVideo={(id) => this.onChangeVideo(id)}
          />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </Layout>
    )
  }
}

const mapStateToProps = (state: any) => {
  return { ...state }
}
const mapDispatchToProps = {
  load, aniKv, aniInformation, aniProfile, aniPerformance, showPageTopBtn, hidePageTopBtn
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top)