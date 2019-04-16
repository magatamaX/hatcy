import css from './style.scss'

const Performance = () => (
    <section id="performance" className={css.performance}>
        <div className={`${css['f-inner']} ${css.inner}`}>
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
                        <iframe className={css.iframe} width="560" height="315" src="https://www.youtube.com/embed/dmSENV5lZ-4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                    </div>
                </div>
            </div>
            <div className={css.playlist}></div>
        </div>
    </section>
)

export default Performance;