import styles from "./styles/Footer.module.css";
import Logo from "../image/Logo.svg";
import iconFacebook from "../image/icon-facebook.svg";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogoContainer}>
          <img src={Logo} alt="" />
        </div>
        <section className={styles.footerSection}>
          <h2 class="section-title">客戶服務</h2>
          <div className={styles.sectionContent}>
            <a class="page-link" href="#">
              運送說明
            </a>
            <a class="page-link" href="#">
              退換貨相關
            </a>
            <a class="page-link" href="#">
              付款資訊
            </a>
            <a class="page-link" href="#">
              FAQ
            </a>
          </div>
        </section>
        <section className={styles.footerSection}>
          <h2 class="section-title">關於我們</h2>
          <div className={styles.sectionContent}>
            <a class="page-link" href="#">
              品牌故事
            </a>
            <a class="page-link" href="#">
              媒體聯繫
            </a>
            <a class="page-link" href="#">
              Press kit
            </a>
          </div>
        </section>
        <section className={styles.footerSection}>
          <h2 class="section-title">資訊</h2>
          <div className={styles.sectionContent}>
            <a class="page-link" href="#">
              隱私權政策
            </a>
            <a class="page-link" href="#">
              Cookie
            </a>
            <a class="page-link" href="#">
              GDPR
            </a>
          </div>
        </section>
        <section className={styles.footerSection}>
          <h2 class="section-title">追蹤 ALPHA Shop</h2>
          <div className={styles.sectionContent}>
            <div className={styles.telInfo}>+886 02123-45678</div>
            <div className={styles.socialIcons}>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg> */}
  
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
