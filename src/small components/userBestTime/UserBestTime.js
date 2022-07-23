import { ref, onValue } from "firebase/database";
import { database } from "../../firebase-config";
import { useState, useEffect } from "react";
import { levelData } from "../../allLevelData";

export default function UserBestTime(props) {
  const singleLevelData = levelData[props.levelNumber];
  const levelName = singleLevelData.name;

  const [bestTimes, setBestTimes] = useState([]);

  useEffect(() => {
    console.log(levelName, props.userID, props.levelNumber);
    if (levelName && props.levelNumber && props.userID) {
      const userLevelTimesKeys = ref(
        database,
        "/user activities/" + props.userID + "/Level No" + props.levelNumber + ": " + levelName
      );

      onValue(userLevelTimesKeys, (snapshot) => {
        const data = snapshot.val();
        const userLevelTimesVal = Object.values(data);
        userLevelTimesVal.sort((a, b) => Object.values(a) - Object.values(b));
        setBestTimes(userLevelTimesVal);
      });
    }
  }, [props.userID]);

  const bestTime = bestTimes.map((time) => {
    return Object.values(time);
  });

  return <div>Your best time: {bestTime[0]} seconds</div>;
}
