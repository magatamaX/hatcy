import Link from 'next/link'
import css from './style.scss'

const Button = ({ size, color, text, path, shadow }) => (
    <Link href={path}>
        <a className={`${css.button} ${css[size]} ${css[color]} ${shadow ? css.shadow : ''}`}>
            {text}
        </a>
    </Link>
)

export default Button