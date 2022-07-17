import { useEffect, useState } from "react";

export default function Timer(props) {
  //   const [startTimer, setStartTimer] = useState(false);

  const startTimer = () => {
    setTimeout(() => {
      props.setTimer(props.timer + 1);
    }, 1000);
  };

  useEffect(() => {
    // startTimer();
  }, [props.timer]);
  return (
    <div>
      <h4>
        Timer <span>{props.timer}</span>
      </h4>
    </div>
  );
}
