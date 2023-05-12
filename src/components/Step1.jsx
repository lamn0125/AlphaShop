import styles from './styles/Form.module.css'
import cities from '../assets/cities.js'

function Step1Input({ label, placeholder }) {
  return (
    <div className={styles.inputGroup}>
      <div className={styles.inputLabel}>{label}</div>
      <input type='tel' placeholder={placeholder} />
    </div>
  )
}

export default function Step1() {
  return (
    <form className={styles.address} data-phase='address'>
      <h3 className={styles.formTitle}>寄送地址</h3>
      <section className={styles.formBody1}>
        <div className={styles.formRow}>
          <div className={styles.inputGroupSelect}>
            <div className={styles.inputLabel}>稱謂</div>
            <div className={styles.selectContainer}>
              <select>
                <option value='mr' selected>
                  先生
                </option>
                <option value='ms'>女士</option>
                <option value='mx'>不明</option>
              </select>
            </div>
          </div>
          <Step1Input label={'姓名'} placeholder={'請輸入姓名'} />
        </div>
        <div className={styles.formRow}>
          <Step1Input label={'電話'} placeholder={'請輸入行動電話'} />
          <Step1Input label={'Email'} placeholder={'請輸入電子郵件'} />
        </div>
        <div className={styles.formRow}>
          <div className={styles.inputGroupSelect}>
            <div className={styles.inputLabel}>縣市</div>
            <div className={styles.selectContainer}>
              <select required>
                <option value=''>請選擇縣市</option>
                {cities.map((city) => (
                  <option value={city.value} key={city.value}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <Step1Input label={'地址'} placeholder={'請輸入地址'} />
        </div>
      </section>
    </form>
  )
}
