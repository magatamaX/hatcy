import Link from 'next/link'
import css from './style.scss'
import Sns from './../common/Sns/index'

const items = [
  {
    display: "トップ",
    href: "#",
  },
  {
    display: "お知らせ",
    href: "#information",
  },
  {
    display: "プロフィール",
    href: "#profile",
  },
  {
    display: "パフォーマンス",
    href: "#performance",
  }
];


const Header = () => (
  <header id="header" className={css.header}>
    <div className={css.inner}>
      <h1 className={css.title}>
        <Link href="/">
          <a><img src="/static/images/header/title.svg" alt="" /></a>
        </Link>
      </h1>
      <nav>
        <ul className={`${css.list} ${css.fFlex} ${css.fFlex_mg30}`}>
          {items.map((item, index) => (
            <li key={index} className={`${css.item} ${css.fFlex3}`}>
              <Link href={item.href}>
                <a className={css.anchor}>{item.display}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={css.sns}>
        <Sns />
      </div>
      <div className={css.contact}>
        <Link href="">
          <a>出演依頼<br />お問合せ</a>
        </Link>
      </div>
    </div>
  </header>
)


export default Header