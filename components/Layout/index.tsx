import Header from './../Header/index'
import css from './style.scss'

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log('Yeah!!')

    (function(d) {
      var config = {
        kitId: 'chb4lrd',
        scriptTimeout: 3000,
        async: true
      },
      h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
    })(document);
  }

  render() {
    return (
      <div className={css['fw']}>
        <div className={css['container']}>
          <Header />
          <main id="contents" className={css['f-max']}>
            <div className={css.wrapper}>
              {this.props.children}
            </div>
          </main>
        </div>
      </div>
    )
  }
}

export default Layout