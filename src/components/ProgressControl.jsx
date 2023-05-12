import styles from './styles/ProgressControl.module.css'
import RightArrow from 'image/RightArrow.svg'
import LeftArrow from 'image/LeftArrow.svg'

export default function ProgressControl({ step, stepsHandler }) {
  return (
    <section className={styles.progressControlContainer}>
      {step === 1 && <ButtonStep1 step={step} stepsHandler={stepsHandler} />}
      {step === 2 && <ButtonStep2 step={step} stepsHandler={stepsHandler} />}
      {step === 3 && <ButtonStep3 step={step} stepsHandler={stepsHandler} />}
    </section>
  )
}

function ButtonStep1({ step, stepsHandler }) {
  return (
    <div>
      <section className={styles.buttonGroup} data-phase='address'>
        <button className={styles.nextBtn} onClick={stepsHandler}>
          下一步
          <img src={RightArrow} alt='' />
        </button>
      </section>
    </div>
  )
}
function ButtonStep2({ step, stepsHandler }) {
  return (
    <div>
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
    </div>
  )
}
function ButtonStep3({ step, stepsHandler }) {
  return (
    <div>
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
