import css from './style.scss'

const Kv = () => (
    <section id="kv" className={css.kv}>
        <div className={css.inner}>
            <p className={css.title}>
                <img src="/static/images/index/kv/title.svg" alt="パフォーミングアーティスト・徳島はっちー" />
            </p>
            <div className={css.bg}>
                <img className={css.bgContents} src="/static/images/index/kv/bg.jpg" alt="" />
            </div>
        </div>
    </section>
)

export default Kv;