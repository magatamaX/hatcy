import Link from 'next/link'
import css from './style.scss'

const Header = () => (
  <header id="header" className={css.header}>
    <div className={css.inner}>
      <h1 className={css.title}>
        <Link href="/">
          <a><img src="/static/images/title.svg" alt="" /></a>
        </Link>
      </h1>
      <ul className={`${css.list} ${css['f-flex']} ${css['f-flex_mg30']}`}>
        <li className={css['f-flex3']}>
          <Link href="">
            <a>トップ</a>
          </Link>
        </li>
        <li className={css['f-flex3']}>
          <Link href="">
            <a>お知らせ</a>
          </Link>
        </li>
        <li className={css['f-flex3']}>
          <Link href="">
            <a>プロフィール</a>
          </Link>
        </li>
        <li className={css['f-flex3']}>
          <Link href="">
            <a>パフォーマンス</a>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="">
            <a>Facebook</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>Instagram</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>twitter</a>
          </Link>
        </li>
      </ul>
      <div>
        <Link href="">
          <a>出演依頼<br />お問合せ</a>
        </Link>
      </div>
    </div>
  </header>
)

export default Header