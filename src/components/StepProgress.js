import styles from "./styles/Step.module.css";
import Ellipse from "../image/Ellipse.svg";

export default function StepProgress() {
  return (
    <div>
      <h2 className={styles.registerTitle}>結帳</h2>
      <section className={styles.progressContainer}>
        <span className={styles.progressGroup} data-phase="address">
          <span className={styles.progressIcon}>
            <span className={styles.progressNum}>1</span>
            <img src={Ellipse} alt="" />
            {/* <svg class="icon cursor-point">
              <use xlink:href="#svg-icon-pg-complete"></use>
            </svg> */}
          </span>
          <span className={styles.progressLabel}>寄送地址</span>
        </span>
        <span className={styles.progressBar} data-order="1"></span>
        <span className={styles.progressGroup} data-phase="shipping">
          <span className={styles.progressIcon}>
            <span className={styles.progressNum}>2</span>
            <img src={Ellipse} alt="" />
            {/* <svg class="icon cursor-point">
              <use xlink:href="#svg-icon-pg-complete"></use>
            </svg>  */}
          </span>
          <span className={styles.progressLabel}>運送方式</span>
        </span>
        <span className={styles.progressBar} data-order="2"></span>
        <span className={styles.progressGroup} data-phase="credit-card">
          <span className={styles.progressIcon}>
            <img src={Ellipse} alt="" />
            <span className={styles.progressNum}>3</span>
            {/* <svg class="icon cursor-point">
              <use xlink:href="#svg-icon-pg-complete"></use>
            </svg> */}
          </span>
          <span className={styles.progressLabel}>付款資訊</span>
        </span>
      </section>
    </div>
  );
}
