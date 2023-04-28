import styles from "./styles/Step.module.css";
import Ellipse from "../image/Ellipse.svg";

function Step({ phase, stepNum, stepText }) {
  return (
    <div>
      <span className={styles.progressGroup} data-phase={phase}>
        <span className={styles.progressIcon}>
          <span className={styles.progressNum}>{stepNum}</span>
          <img src={Ellipse} alt="" />
        </span>
        <span className={styles.progressLabel}>{stepText}</span>
      </span>
    </div>
  );
}

export default function StepProgress() {
  return (
    <div>
      <h2 className={styles.registerTitle}>結帳</h2>
      <section className={styles.progressContainer}>
        <Step phase={"address"} stepNum={"1"} stepText={"寄送地址"} />
        <span className={styles.progressBar} data-order="1"></span>
        <Step phase={"shipping"} stepNum={"2"} stepText={"運送方式"} />
        <span className={styles.progressBar} data-order="2"></span>
        <Step phase={"credit-card"} stepNum={"3"} stepText={"付款資訊"} />
      </section>
    </div>
  );
}
