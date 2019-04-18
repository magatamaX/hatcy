import Link from 'next/link'
import css from './style.scss'

const Button = (
    { size, color, text, path, shadow } :
    { size: string, color: string, text: string, path: string, shadow: boolean }
    ) => (
    <Link href={path}>
        <a className={`${css.button} ${
            size === "large" ?
            css.large :
            size === "medium" ?
            css.medium :
            ''
        } ${
            color === "blue" ?
            css.blue :
            color === "yellow" ?
            css.yellow :
            ''
        } ${shadow ? css.shadow : ''}`}>
            {text}
        </a>
    </Link>
)

export default Button