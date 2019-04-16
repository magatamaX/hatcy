import Link from 'next/link'
import css from './style.scss'
import Button from './../../common/Button/index'

const list = [
    {
        date: "2019.02.09",
        text: "徳島はっちー単独公演vol.3『引き篭り家族』終演～ ご来場下さった皆様、本当に有り難うございました。",
        href: ""
    },
    {
        date: "2019.02.09",
        text: "徳島はっちー単独公演vol.3『引き篭り家族』終演～ ご来場下さった皆様、本当に有り難うございました。",
        href: ""
    },
    {
        date: "2019.02.09",
        text: "徳島はっちー単独公演vol.3『引き篭り家族』終演～ ご来場下さった皆様、本当に有り難うございました。",
        href: ""
    },
]

const Information = () => (
    <section id="information" className={css.information}>
        <div className={`${css['f-inner']} ${css.inner}`}>
            <h2 className={css.title}>
                <img src="/static/images/index/information/title.svg" alt="お知らせ" />
            </h2>
            <div className={css.fukidashi}>
                <ul className={css.list}>
                    {list.map((item, i) => (
                        <li key={i} className={css.item}>
                            <Link href={item.href}>
                                <a className={css.linkbox}>
                                    <dl className={css.content}>
                                        <dt className={css.date}>{item.date}</dt>
                                        <dd className={css.text}>
                                            <p>{item.text}</p>
                                        </dd>
                                    </dl>
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className={css.buttonArea}>
                    <Button
                        color="blue"
                        text="もっと見る"
                        size="medium"
                        path="/information"
                        shadow={true}
                    />
                </div>
            </div>
            <figure className={css.hatchy}>
                <img src="/static/images/index/information/yellow_hatchy.png" alt="徳島はっちー" />
            </figure>
            <div className={css.pa}>
                <img src="/static/images/index/information/pa.svg" alt="" />
            </div>
        </div>
    </section>
)

export default Information;