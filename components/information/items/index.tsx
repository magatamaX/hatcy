import Link from 'next/link'
import css from './style.scss'

const Items = ({ list }) => (
    <div className={css['f-inner']}>
        <ul className={`${css['f-flex']} ${css['f-flex_mg20']} ${css['f-flex_mg0_s']} ${css.list}`}>
            {list.map((item, i ) => (
                <li key={i} className={`${css['f-flex4']} ${css['f-flex12_s']} ${css.item}`}>
                    <Link href={item.path}>
                        <a className={css.box}>
                            <figure className={css.image}>
                                <img src={item.img} alt="" />
                            </figure>
                            <p className={css.text}>{item.text}</p>
                            <p className={css.date}>{item.date}</p>
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
)

export default Items;