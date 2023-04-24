import StepProgress from "./components/StepProgress";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import ProgressControl from "./components/ProgressControl";
import styles from "./components/styles/Step.module.css";

function App() {
  return (
    <div>
      <StepProgress />
      <Step1 />
      {/* <Step2 />
      <Step3 /> */}
      <ProgressControl />
    </div>
  );
}

export default App;
