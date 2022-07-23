import styles from "./gameTitle.module.css";
import Timer from "../timer/Timer";
import { Link } from "react-router-dom";
import Leaderboard from "../leaderboard/Leaderboard";
import { useEffect, useState } from "react";
import UserBestTime from "../userBestTime/UserBestTime";

export default function GameTitle(props) {
  const [leaderDialog, setLeaderDialog] = useState();

  useEffect(() => {
    setLeaderDialog(document.getElementById("leaderDialog"));
  }, []);
  const openLeaderboard = () => {
    leaderDialog.showModal();
  };

  const closeLeaderboard = () => {
    leaderDialog.close();
  };

  return (
    <div>
      <div className={styles.gameTitle}>
        <div className={styles.userTimes}>
          <Timer
            startTimer={props.startTimer}
            setStartTimer={props.setStartTimer}
            endTime={props.endTime}
            setEndTime={props.setEndTime}
          />
          <h4>{props.userID ? <UserBestTime levelNumber={props.levelNumber} userID={props.userID} /> : null}</h4>
        </div>
        <h1>{props.gameName}</h1>
        <h3 onClick={openLeaderboard}>Leaderboard</h3>
        <dialog id="leaderDialog">
          <Leaderboard levelNumber={props.levelNumber} />
          <button onClick={closeLeaderboard}>Close</button>
        </dialog>
      </div>
    </div>
  );
}
