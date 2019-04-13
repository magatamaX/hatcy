import Header from './../Header/index'
import css from './style.scss'


const Layout = props => (
  <body className={css['fw']}>
    <div className={css['container']}>
      <Header />
      <main id="contents" className={css['f-max']}>
      {props.children}
      </main>
    </div>
  </body>
)

export default Layout