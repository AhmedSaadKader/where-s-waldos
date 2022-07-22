import styles from "./FrontPage.module.css";
import firstImage from "../images/wheresYoda.jpg";
import { Link } from "react-router-dom";
import { levelData } from "../../allLevelData";
import { click } from "@testing-library/user-event/dist/click";

export default function FrontPage({
  setStartTimer,
  setLevel,
  setLevelName,
  setBoard,
  setCharacters,
  setCharactersPositions,
}) {
  setStartTimer(false);

  const createLevelsFront = Object.keys(levelData).map((level) => {
    console.log(level);
    const gameBoard = levelData[level].board;
    const gameName = levelData[level].name;

    const gameLink = `game/${level}`;
    return (
      <div className={styles.cards}>
        <Link to={gameLink}>
          <img src={gameBoard} alt="gameboard" />
          <div>
            <h4>{gameName}</h4>
          </div>
        </Link>
      </div>
    );
  });

  return <div className={styles.frontPage}>{createLevelsFront}</div>;
}
