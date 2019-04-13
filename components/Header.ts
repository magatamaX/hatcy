import Link from 'next/link'
import css from './Header.scss'


const Header = () => (
  <header id="header">
    <h1 className="">
      <Link href="/">
        <a>パフォーミングアーティスト 徳島はっちー</a>
      </Link>
    </h1>
    <ul className={`${css['f-flex']} ${css['f-flex_mg30']}`}>
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
  </header>
)

export default Header