import styles from "./Game.module.css";
import { useEffect, useState } from "react";
import Dropdown from "../../small components/Dropdown";
import Leaderboard from "../leaderboard/Leaderboard";
import { useParams } from "react-router-dom";
import { levelData } from "../../allLevelData";
import Timer from "../timer/Timer";

export default function Game(props) {
  const [dropDownCoordinates, setDropDownCoordinates] = useState([0, 0]);
  const [imageCoordinates, setImageCoordinates] = useState([0, 0]);
  const [gameOver, setGameOver] = useState(false);

  let { levelNumber } = useParams();
  const singleLevelData = levelData[levelNumber];
  const gameName = singleLevelData.name;
  const image = singleLevelData.board;
  const characters = singleLevelData.characters;
  const charactersCoordinates = singleLevelData.charactersPositions;

  const waldoCoordinates = charactersCoordinates[characters];

  const clickOnImage = (e) => {
    const dropDownXCoord = e.pageX;
    const dropDownYCoord = e.pageY;
    setDropDownCoordinates([dropDownXCoord, dropDownYCoord]);
    const imageXCoord = Math.round((e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100);
    const imageYCoord = Math.round((e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100);
    setImageCoordinates([imageXCoord, imageYCoord]);
  };

  const getRightCoordinates = () => {
    if (
      imageCoordinates[0] <= waldoCoordinates[0] + 2 &&
      imageCoordinates[0] >= waldoCoordinates[0] - 2 &&
      imageCoordinates[1] <= waldoCoordinates[1] + 2 &&
      imageCoordinates[1] >= waldoCoordinates[1] - 2
    ) {
      setGameOver(true);
      console.log("cool");
    }
  };

  useEffect(() => {
    if (gameOver === false) {
      props.setStartTimer(true);
    } else {
      props.setStartTimer(false);
    }
    getRightCoordinates();
  }, [imageCoordinates, gameOver]);

  return (
    <div className={styles.gameDiv}>
      <div>
        <div className={styles.gameTitle}>
          <Timer
            startTimer={props.startTimer}
            setStartTimer={props.setStartTimer}
            endTime={props.endTime}
            setEndTime={props.setEndTime}
          />
          <h1>{gameName}</h1>
          <h3>Leaderboard</h3>
        </div>
        <img
          src={image}
          alt="Waldo where?"
          data-game="gameImage"
          className={styles.gameImage}
          onClick={(e) => {
            clickOnImage(e);
          }}
        />
        {props.displayDropdown ? <Dropdown xCoord={dropDownCoordinates[0]} yCoord={dropDownCoordinates[1]} /> : null}
      </div>
    </div>
  );
}
