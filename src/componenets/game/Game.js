import styles from "./Game.module.css";
import image from "../images/whereswaldofirst.jpg";
import { useState } from "react";
import Dropdown from "../../small components/Dropdown";

export default function Game() {
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [coordinates, setCoordinates] = useState([0, 0]);

  const clickOnImage = (e) => {
    setDisplayDropdown(true);
    const xCoord = e.pageX;
    const yCoord = e.pageY;
    console.log(e.pageX - e.target.offsetLeft);
    setCoordinates([xCoord, yCoord]);
  };

  return (
    <div className={styles.gameDiv}>
      <img
        src={image}
        alt="Waldo where?"
        className={styles.gameImage}
        onClick={(e) => {
          clickOnImage(e);
        }}
      />
      <Dropdown xCoord={coordinates[0]} yCoord={coordinates[1]} />
    </div>
  );
}
