import Link from 'next/link'
import css from './style.scss'

const Button = ({ size, color, text, url, shadow }) => (
    <Link href={url}>
        <a className={`${css.button} ${css[size]} ${css[color]} ${shadow ? css.shadow : ''}`}>
            {text}
        </a>
    </Link>
)

export default Button