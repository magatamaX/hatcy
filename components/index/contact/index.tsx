import css from './style.scss'
import Button from './../../common/Button/index'

const Contact = () => (
    <div className={css.contact}>
        <div className={css.titlebox}>
            <p className={css.engTitle}>CONTACT</p>
            <h2 className={css.title}>お問い合わせ</h2>
        </div>
        <div className={css.contactbox}>
            <div className={css.fInner}>
                <p>大道芸・ピエロなど各種イベント出演依頼や、ご質問、ご相談など<br />こちらからお気軽にお問い合わせ下さい。</p>
                <div className={css.buttonArea}>
                    <Button
                        color="yellow"
                        text="お問い合わせ"
                        size="large"
                        path="/contact"
                        shadow={false}
                    />
                </div>
            </div>
        </div>
    </div>
)

export default Contact;