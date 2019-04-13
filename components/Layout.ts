import Header from './Header'
import baseStyle from './../styles/fw.scss';


const Layout = props => (
  <div className={baseStyle['fw']}>
    <Header />
    {props.children}
  </div>
)

export default Layout