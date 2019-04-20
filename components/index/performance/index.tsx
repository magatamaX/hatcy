import css from './style.scss'
import Slider from "react-slick";

const settings: any = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 5,
    speed: 500,
    dots: false,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        }
    ]
};

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
        </div>
        <div className={css.playlist}>
            <Slider {...settings}>
                {list.map((item, i) => (
                    <div className={css.slideItem} key={i} onClick={() => onChangeVideo( item.snippet.resourceId.videoId )}>
                        <div className={`slick-thumbBlock ${css.thumbBlock}`}>
                            <figure className={css.thumbArea}>
                                <img className={css.thumb} src={item.snippet.thumbnails.standard.url} alt="" />
                                <figcaption className={css.caption}>{item.snippet.title}</figcaption>
                            </figure>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </section>
)

export default Performance;