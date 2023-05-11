import styles from "./components/styles/Main.module.css";
import Header from "./components/Header";
import StepProgress from "./components/StepProgress";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import ProgressControl from "./components/ProgressControl";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <div className={styles}>
      <Header />
      <div style={{ display: "flex", flex: 1 }}>
        <div style={{ flex: "1", padding: "20px" }}>
          <StepProgress />
          <Step1 />
          <Step2 />
            <Step3 />
          <ProgressControl />
        </div>
        <div style={{ flex: 1, padding: "20px" }}>
          <Cart />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
