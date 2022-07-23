import styles from "./App.module.css";
import Header from "./componenets/header/Header";
import Game from "./componenets/game/Game";
import FrontPage from "./componenets/front page/FrontPage";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { database } from "./firebase-config";
import { child, push, ref, update } from "firebase/database";

function App() {
  const [user, setUser] = useState();
  const [startTimer, setStartTimer] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [endTime, setEndTime] = useState(0);
  const [userID, setUserID] = useState();
  const [levelNumber, setLevelNumber] = useState();
  const [levelName, setLevelName] = useState("");

  const clickToDisplayDropDown = (e) => {
    if (e.target.dataset.game === "gameImage") {
      setDisplayDropdown(true);
    } else {
      setDisplayDropdown(false);
    }
  };

  useEffect(() => {
    if (levelName && levelNumber && userID) {
      const newEndTimeKey = push(child(ref(database), "user activites")).key;
      const updates = {};
      updates["/user activities/" + userID + "/Level No" + levelNumber + ": " + levelName + "/" + newEndTimeKey] = {
        [user.displayName]: endTime,
      };
      updates["/levels/level " + levelNumber + ": " + levelName + "/" + newEndTimeKey] = {
        [user.displayName]: endTime,
      };
      update(ref(database), updates);
    }
  }, [gameOver]);

  return (
    <div className={styles.App} onClick={(e) => clickToDisplayDropDown(e)}>
      <Header user={user} setUser={setUser} userID={userID} setUserID={setUserID} />
      <Routes>
        <Route path="/" element={<FrontPage setStartTimer={setStartTimer} />} />
        <Route
          path="/game/:levelNumber"
          element={
            <Game
              displayDropdown={displayDropdown}
              setDisplayDropdown={setDisplayDropdown}
              startTimer={startTimer}
              setStartTimer={setStartTimer}
              endTime={endTime}
              setEndTime={setEndTime}
              setLevelNumber={setLevelNumber}
              setLevelName={setLevelName}
              gameOver={gameOver}
              setGameOver={setGameOver}
              userID={userID}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
