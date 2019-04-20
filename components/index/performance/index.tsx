import css from './style.scss'

const Performance = (
    {
        list,
        current,
        onChangeVideo
    } :
    {
        list: {[key: string]: any}[],
        current: string,
        onChangeVideo: (id: string) => void
    }) => (
    <section id="performance" className={css.performance}>
        <div className={`${css.fInner} ${css.inner}`}>
            <h2 className={css.title}>
                <img src="/static/images/index/performance/title.svg" alt="プロフィール" />
            </h2>
            <div className={css.videobox}>
                <figure className={css.hatchy}>
                    <img src="/static/images/index/performance/yellow_hatchy_mini.png" alt="徳島はっちー" />
                </figure>
                <div className={css.frame}>
                    <img src="/static/images/index/performance/flame_tv.png" alt="" />
                </div>
                <div className={css.youtube}>
                    <div className={css.iframewrap}>
                        <iframe className={css.iframe}
                            src={`https://www.youtube.com/embed/${current}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
            <div className={css.playlist}>
                <ul>
                    {list.map((item, i) => (
                        <li key={i} onClick={() => onChangeVideo( item.snippet.resourceId.videoId )}>
                            <p>{item.snippet.title}</p>
                            <p><img src={item.snippet.thumbnails.medium.url} alt="" /></p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
)

export default Performance;