import styles from "./styles/Form.module.css";

function Step3Input({ text, placeholder }) {
  return (
    <div className={styles.input}>
      <div className={styles.inputGroup}>
        <div className={styles.inputLabel}>{text}</div>
        <input type="text" placeholder={placeholder} />
      </div>
    </div>
  );
}

export default function Step3() {
  return (
    <form data-phase="credit-card">
      <h3 className={styles.formTitle}>付款資訊</h3>
      <section className={styles.formBody3}>
        <Step3Input text={"持卡人姓名"} placeholder={"John Doe"} />
        <Step3Input text={"卡號"} placeholder={"1111 2222 3333 4444"} />
        <div>
          <div className={styles.inputGroupDate}>
            <Step3Input text={"有效期限"} placeholder={"MM/YY"} />
            <Step3Input text={"CVC / CCV"} placeholder={"123"} />
          </div>
        </div>
      </section>
    </form>
  );
}
