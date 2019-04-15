import Link from 'next/link'
import css from './style.scss'

import Facebook from './../../svg/facebook.svg'
import Instagram from './../../svg/instagram.svg'
import Twitter from './../../svg/twitter.svg'

const Sns = () => (
    <ul className={`${css.sns} ${css['f-flex']} ${css['f-flex_mg20']}`}>
        <li className={css['f-flex4']}>
            <Link href="">
                <a><Facebook /></a>
            </Link>
        </li>
        <li className={css['f-flex4']}>
            <Link href="">
                <a><Instagram /></a>
            </Link>
        </li>
        <li className={css['f-flex4']}>
            <Link href="">
                <a><Twitter /></a>
            </Link>
        </li>
    </ul>
)

export default Sns