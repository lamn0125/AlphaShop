import styles from "./styles/Form.module.css";

export default function Step3() {
  return (
    <form data-phase="credit-card">
      <h3 className={styles.formTitle}>付款資訊</h3>
      <section className={styles.formBody3}>
        <div className={styles.input}>
          <div className={styles.inputGroup}>
            <div className={styles.inputLabel}>持卡人姓名</div>
            <input type="text" placeholder="John Doe" />
          </div>
        </div>
        <div className={styles.input}>
          <div className={styles.inputGroup}>
            <div className={styles.inputLabel}>卡號</div>
            <input type="text" placeholder="1111 2222 3333 4444" />
          </div>
        </div>
        <div>
          <div className={styles.inputGroupDate}>
            <div className={styles.inputGroup}>
              <div className={styles.inputLabel}>有效期限</div>
              <input type="text" placeholder="MM/YY" />
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.inputLabel}>CVC / CCV</div>
              <input type="text" placeholder="123" />
            </div>
          </div>
        </div>
      </section>
    </form>
  );
}
