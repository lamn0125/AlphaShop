import styles from "./styles/Form.module.css";

function Step2Input({ checked, price, id, text, amount, period }) {
  return (
    <label className={styles.radioGroup} data-price={price}>
      <input id={id} type="radio" name="shipping" checked={checked} />
      <div className={styles.radioInfo}>
        <div className={styles.radioTitle}>
          <div>{text}</div>
          <div className={styles.radioPrice}>{amount}</div>
        </div>
        <div className={styles.radioPeriod}>{period}</div>
      </div>
      <div className={styles.boxBorder}></div>
    </label>
  );
}

export default function Step2() {
  return (
    <form data-phase="shipping">
      <h3 className={styles.formTitle}>運送方式</h3>
      <section className={styles.formBody2}>
        <Step2Input
          checked={true}
          price={"0"}
          id={"shipping-standard"}
          text={"標準運送"}
          amount={"免費"}
          period={"約 3~7 個工作天"}
        />
        <Step2Input
          price={"500"}
          id={"shipping-dhl"}
          text={"DHL 貨運"}
          amount={"500"}
          period={"48 小時內送達"}
        />
      </section>
    </form>
  );
}
