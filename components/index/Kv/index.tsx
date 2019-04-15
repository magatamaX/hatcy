import css from './style.scss'

const Kv = () => (
    <section className={css.kv}>
        <div className={css.inner}>
            <p className={css.title}>
                <img src="/static/images/kv/title.svg" alt="" />
            </p>
            <div className={css.bg}>
                <img className={css.bgContents} src="/static/images/kv/bg.jpg" alt="" />
            </div>
        </div>
    </section>
)

export default Kv;