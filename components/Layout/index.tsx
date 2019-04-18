import Header from './../Header/index'
import Footer from './../Footer/index'
import css from './style.scss'

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('これはLayoutコンポーネントです。');
  }

  componentWillUnmount() {
    console.log('Layoutコンポーネントがアンマウントされます!!')
  }

  render() {
    return (
      <div className={css.fw}>
        <div className={css.container}>
          <Header />
          <main id="contents" className={css.fMax}>
            <div className={css.wrapper}>
              {this.props.children}
            </div>
          </main>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Layout