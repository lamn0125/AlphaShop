import styles from './styles/Step.module.css'

function Step({ step, phase, stepNum, stepText }) {
  return (
    <div>
      <span
        className={styles.progressGroup}
        data-phase={phase}
        data-step={step}
      >
        <span className={styles.progressIcon}>
          {step <= Number(stepNum) ? (
            <span className={styles.progressNumCurrent}>{stepNum}</span>
          ) : (
            <span className={styles.progressNumDone}>&#10004;</span>
          )}

          {step === Number(stepNum) ? (
            <p className={styles.circleCurrent}></p>
          ) : step > Number(stepNum) ? (
            <p className={styles.circleDone}></p>
          ) : (
            <p className={styles.circleCurrent}></p>
          )}
        </span>
        <span className={styles.progressLabel}>{stepText}</span>
      </span>
    </div>
  )
}

export default function StepProgress({ step }) {
  return (
    <div>
      <h2 className={styles.registerTitle}>結帳</h2>
      <section className={styles.progressContainer}>
        <Step
          phase={'address'}
          stepNum={'1'}
          stepText={'寄送地址'}
          step={step}
        />
        <span className={styles.progressBar} data-order='1'></span>
        <Step
          phase={'shipping'}
          stepNum={'2'}
          stepText={'運送方式'}
          step={step}
        />
        <span className={styles.progressBar} data-order='2'></span>
        <Step
          phase={'credit-card'}
          stepNum={'3'}
          stepText={'付款資訊'}
          step={step}
        />
      </section>
    </div>
  )
}
