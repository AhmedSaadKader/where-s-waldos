import styles from "./App.module.css";
import Header from "./componenets/header/Header";
import Game from "./componenets/game/Game";
import FrontPage from "./componenets/front page/FrontPage";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { levelData } from "./allLevelData";

function App() {
  const [user, setUser] = useState();
  const [startTimer, setStartTimer] = useState(false);
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [endTime, setEndTime] = useState(0);
  const [level, setLevel] = useState(0);
  const [levelName, setLevelName] = useState("");
  const [board, setBoard] = useState();
  const [characters, setCharacters] = useState();
  const [charactersPositions, setCharactersPositions] = useState();

  const clickToDisplayDropDown = (e) => {
    if (e.target.dataset.game === "gameImage") {
      setDisplayDropdown(true);
    } else {
      setDisplayDropdown(false);
    }
  };

  return (
    <div className={styles.App} onClick={(e) => clickToDisplayDropDown(e)}>
      <BrowserRouter>
        <Header user={user} setUser={setUser} />
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
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
