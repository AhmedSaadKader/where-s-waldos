import { useEffect, useState } from "react";
import styles from "./Timer.module.css";

export default function Timer(props) {
  const [timer, setTimer] = useState(0);

  const timerStart = () => {
    setTimeout(() => {
      setTimer(timer + 1);
    }, 1000);
  };

  useEffect(() => {
    if (props.startTimer === true) {
      timerStart();
      props.setEndTime(timer);
    } else {
      setTimer(0);
    }
  });
  return (
    <div className={styles.timer}>
      <h4>
        Timer <span>{timer} seconds</span>
      </h4>
    </div>
  );
}
