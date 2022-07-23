import styles from "./Leaderboard.module.css";
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase-config";
import { useState, useEffect } from "react";
import { levelData } from "../../allLevelData";

export default function Leaderboard(props) {
  const singleLevelData = levelData[props.levelNumber];
  const levelName = singleLevelData.name;

  const [leaderBoard, setLeaderBoard] = useState([]);

  useEffect(() => {
    if (levelName && props.levelNumber) {
      const userLevelTimesKeys = ref(database, `/levels/level ${props.levelNumber}: ${levelName}/`);

      onValue(userLevelTimesKeys, (snapshot) => {
        const data = snapshot.val();
        const userLevelTimesVal = Object.values(data);
        userLevelTimesVal.sort((a, b) => Object.values(a) - Object.values(b));
        setLeaderBoard(userLevelTimesVal);
      });
    }
  }, []);

  const leaderBoardMap = leaderBoard.map((time) => {
    return (
      <div>
        {leaderBoard.indexOf(time) + 1}. {Object.keys(time)} : {Object.values(time)}
      </div>
    );
  });

  return (
    <div>
      <h2>Leaderboard</h2>
      {leaderBoardMap}
    </div>
  );
}
