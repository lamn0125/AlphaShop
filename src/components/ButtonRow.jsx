import styles from './styles/ProgressControl.module.css'
import RightArrow from 'image/RightArrow.svg'
import LeftArrow from 'image/LeftArrow.svg'

export default function ButtonRow({ step, stepsHandler }) {
  return (
    <div>
      <section className={styles.buttonGroup} data-phase='address'>
        <button className={styles.nextBtn} onClick={stepsHandler}>
          下一步
          <img src={RightArrow} alt='' />
        </button>
      </section>

      <section className={styles.buttonGroup} data-phase='shipping'>
        <button className={styles.prevBtn} onClick={stepsHandler}>
          <img src={LeftArrow} alt='' />
          上一步
        </button>
        <button className={styles.nextBtn} onClick={stepsHandler}>
          下一步
          <img src={RightArrow} alt='' />
        </button>
      </section>

      <section className={styles.buttonGroup} data-phase='credit-card'>
        <button className={styles.prevBtn} onClick={stepsHandler}>
          <img src={LeftArrow} alt='' />
          上一步
        </button>
        <button className={styles.nextBtn}>確認下單</button>
      </section>
    </div>
  )
}
