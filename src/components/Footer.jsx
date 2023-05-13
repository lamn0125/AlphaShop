import styles from './styles/Footer.module.css'
import Logo from 'image/Logo.svg'
// import iconFacebook from "image/icon-facebook.svg";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogoContainer}>
          <img src={Logo} alt='' />
        </div>
        <section className={styles.footerSection}>
          <h2 className='section-title'>客戶服務</h2>
          <div className={styles.sectionContent}>
            <a className='page-link' href='#'>
              運送說明
            </a>
            <a className='page-link' href='#'>
              退換貨相關
            </a>
            <a className='page-link' href='#'>
              付款資訊
            </a>
            <a className='page-link' href='#'>
              FAQ
            </a>
          </div>
        </section>
        <section className={styles.footerSection}>
          <h2 className='section-title'>關於我們</h2>
          <div className={styles.sectionContent}>
            <a className='page-link' href='#'>
              品牌故事
            </a>
            <a className='page-link' href='#'>
              媒體聯繫
            </a>
            <a className='page-link' href='#'>
              Press kit
            </a>
          </div>
        </section>
        <section className={styles.footerSection}>
          <h2 className='section-title'>資訊</h2>
          <div className={styles.sectionContent}>
            <a className='page-link' href='#'>
              隱私權政策
            </a>
            <a className='page-link' href='#'>
              Cookie
            </a>
            <a className='page-link' href='#'>
              GDPR
            </a>
          </div>
        </section>
        <section className={styles.footerSection}>
          <h2 className='section-title'>追蹤 ALPHA Shop</h2>
          <div className={styles.sectionContent}>
            <div className={styles.telInfo}>+886 02123-45678</div>
            <div className={styles.socialIcons}></div>
          </div>
        </section>
      </div>
    </footer>
  )
}
