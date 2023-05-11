import styles from './styles/ProgressControl.module.css'
import RightArrow from 'image/RightArrow.svg'
import LeftArrow from 'image/LeftArrow.svg'

export default function ProgressControl() {
  return (
    <section className={styles.progressControlContainer}>
      <section className={styles.buttonGroup} data-phase='address'>
        <button className={styles.nextBtn}>
          下一步
          <img src={RightArrow} alt='' />
        </button>
      </section>
      <section className={styles.buttonGroup} data-phase='shipping'>
        <button className={styles.prevBtn}>
          <img src={LeftArrow} alt='' />
          上一步
        </button>
        <button className={styles.nextBtn}>
          下一步
          <img src={RightArrow} alt='' />
        </button>
      </section>
      <section className={styles.buttonGroup} data-phase='credit-card'>
        <button className={styles.prevBtn}>
          <img src={LeftArrow} alt='' />
          上一步
        </button>
        <button className={styles.nextBtn}>確認下單</button>
      </section>
    </section>
  )
}
