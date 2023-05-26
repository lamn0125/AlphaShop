import { useContext } from 'react'
import { CheckoutContext } from '../Context/CheckoutContext.js'

import styles from './styles/Form.module.css'

function Step3Input({ text, name, placeholder }) {
  const { onHandleInput } = useContext(CheckoutContext)

  return (
    <div className={styles.input}>
      <div className={styles.inputGroup}>
        <div className={styles.inputLabel}>{text}</div>
        <input type='text' name={name} placeholder={placeholder} onChange={onHandleInput} />
      </div>
    </div>
  )
}

export default function Step3() {
  return (
    <form data-phase='credit-card'>
      <h3 className={styles.formTitle}>付款資訊</h3>
      <section className={styles.formBody3}>
        <Step3Input
          text={'持卡人姓名'}
          placeholder={'John Doe'}
          name={'cardOwner'}
        />
        <Step3Input
          text={'卡號'}
          placeholder={'1111 2222 3333 4444'}
          name={'cardNumber'}
          />
        <div>
          <div className={styles.inputGroupDate}>
            <Step3Input
              text={'有效期限'}
              placeholder={'MM/YY'}
              name={'cardExp'}
              />
            <Step3Input
              text={'CVC / CCV'}
              placeholder={'123'}
              name={'cardCcv'}
            />
          </div>
        </div>
      </section>
    </form>
  )
}
