import styles from "./FrontPage.module.css";
import firstImage from "../images/wheresYoda.jpg";
import { Link } from "react-router-dom";
import { levelData } from "../../allLevelData";
import { click } from "@testing-library/user-event/dist/click";
import { useEffect } from "react";

export default function FrontPage({ setStartTimer }) {
  useEffect(() => {
    setStartTimer(false);
  }, []);

  const createLevelsFront = Object.keys(levelData).map((level) => {
    const gameBoard = levelData[level].board;
    const gameName = levelData[level].name;

    const gameLink = `game/${level}`;
    return (
      <div className={styles.cards} key={gameLink}>
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
