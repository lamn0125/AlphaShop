import styles from "./components/styles/Main.module.css";
import Header from "./components/Header";
import StepProgress from "./components/StepProgress";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import ProgressControl from "./components/ProgressControl";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

import { CheckoutContextProvider } from "./Context/CheckoutContext.js"
import { CartContextProvider } from "./Context/CartContext.js"

import { useState } from "react";

function App() {
  const [ step, setStep ] = useState(1);
   function stepsHandler(e) {
    if (e.target.className.includes("nextBtn")&& step <= 3) {
      setStep(step + 1);
    } else if (e.target.className.includes("prevBtn")) {
      setStep(step - 1)
    }
  }
  return (
    <div className={styles}>
    <CheckoutContextProvider >
    <CartContextProvider>
      <Header />
      <div className={styles.mainWrapper}>
        <section className={styles.mainContainer} data-phase={step}>
          <StepProgress step={step}/>
          <div className={styles.formsContainer}>
            {step === 1 && <Step1 />}
            {step === 2 && <Step2 />}
              {step === 3 && <Step3 />}
              <ProgressControl step={step} stepsHandler={stepsHandler}/>
          </div>
        </section>
        <section className={styles.mainContainer}>
          <Cart />
        </section>
      </div>
      <Footer />
      </CartContextProvider>
    </CheckoutContextProvider>

    </div>
  );
}

export default App;
