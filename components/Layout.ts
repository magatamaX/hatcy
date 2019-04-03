import Header from './Header'
import './../styles/scss/style.scss'


const Layout = props => (
  <div className="fw">
    <Header />
    {props.children}
  </div>
)

export default Layout