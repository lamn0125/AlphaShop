import styles from "./styles/Form.module.css";

export default function Step2() {
  return (
    <form class="col col-12" data-phase="shipping">
      <h3 className={styles.formTitle}>運送方式</h3>
      <section className={styles.formBody2}>
        <label className={styles.radioGroup} data-price="0">
          <input id="shipping-standard" type="radio" name="shipping" checked />
          <div className={styles.radioInfo}>
            <div className={styles.radioTitle}>
              <div class="text">標準運送</div>
              <div className={styles.radioPrice}>免費</div>
            </div>
            <div className={styles.radioPeriod}>約 3~7 個工作天</div>
          </div>
          <div className={styles.boxBorder}></div>
        </label>
        <label className={styles.radioGroup} data-price="500">
          <input id="shipping-dhl" type="radio" name="shipping" />
          <div className={styles.radioInfo}>
            <div className={styles.radioTitle}>
              <div class="text">DHL 貨運</div>
              <div className={styles.radioPrice}>$500</div>
            </div>
            <div className={styles.radioPeriod}>48 小時內送達</div>
          </div>
          <div className={styles.boxBorder}></div>
        </label>
      </section>
    </form>
  );
}
