import styles from "./Game.module.css";
import { useEffect, useState } from "react";
import Dropdown from "../../small components/dropdown/Dropdown";
import { useParams } from "react-router-dom";
import { levelData } from "../../allLevelData";
import GameTitle from "../../small components/gameTitle/gameTitle";

export default function Game(props) {
  const [dropDownCoordinates, setDropDownCoordinates] = useState([0, 0]);
  const [imageCoordinates, setImageCoordinates] = useState([0, 0]);
  const [clickedCharacter, setClickedCharacter] = useState("");

  let { levelNumber } = useParams();
  const singleLevelData = levelData[levelNumber];
  const gameName = singleLevelData.name;
  const image = singleLevelData.board;
  const characters = singleLevelData.characters;
  const charactersCoordinates = singleLevelData.charactersPositions;
  const charactersImage = singleLevelData.charactersImage;

  useEffect(() => {
    props.setLevelName(gameName);
    props.setLevelNumber(levelNumber);
  }, []);

  const [charactersWithCoordinates, setCharactersWithCoordinates] = useState(charactersCoordinates);

  const clickOnImage = (e) => {
    const dropDownXCoord = e.pageX;
    const dropDownYCoord = e.pageY;
    setDropDownCoordinates([dropDownXCoord, dropDownYCoord]);
    const imageXCoord = Math.round((e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100);
    const imageYCoord = Math.round((e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100);
    setImageCoordinates([imageXCoord, imageYCoord]);
  };

  const getRightCoordinates = () => {
    const clickedCharacterPosition = charactersWithCoordinates[clickedCharacter]["position"];
    if (
      imageCoordinates[0] <= clickedCharacterPosition[0] + 2 &&
      imageCoordinates[0] >= clickedCharacterPosition[0] - 2 &&
      imageCoordinates[1] <= clickedCharacterPosition[1] + 2 &&
      imageCoordinates[1] >= clickedCharacterPosition[1] - 2
    ) {
      setCharactersWithCoordinates((prevState) => {
        return {
          ...prevState,
          ...(charactersWithCoordinates[clickedCharacter]["found"] = true),
        };
      });
    }
  };

  const checkFoundCharacters = () => {
    let trueOrFalse = [];
    Object.keys(charactersWithCoordinates).forEach((key) => {
      trueOrFalse.push(charactersWithCoordinates[key]["found"]);
    });
    if (trueOrFalse.every((value) => value === true)) {
      props.setGameOver(true);
    }
  };

  useEffect(() => {
    checkFoundCharacters();
  }, [charactersWithCoordinates]);

  useEffect(() => {
    if (props.gameOver === false) {
      props.setStartTimer(true);
    } else {
      props.setStartTimer(false);
    }
  }, [imageCoordinates, props.gameOver]);

  useEffect(() => {
    if (clickedCharacter) {
      const clickedCharacterPosition = charactersWithCoordinates[clickedCharacter]["position"];
      getRightCoordinates();
    }
    setClickedCharacter();
  }, [clickedCharacter]);

  return (
    <div className={styles.gameDiv}>
      <div>
        <GameTitle
          startTimer={props.startTimer}
          setStartTimer={props.setStartTimer}
          endTime={props.endTime}
          setEndTime={props.setEndTime}
          gameName={gameName}
          levelNumber={levelNumber}
          userID={props.userID}
        />
        <img
          src={image}
          alt="Waldo where?"
          data-game="gameImage"
          className={styles.gameImage}
          onClick={(e) => {
            clickOnImage(e);
          }}
        />
        {props.displayDropdown ? (
          <Dropdown
            xCoord={dropDownCoordinates[0]}
            yCoord={dropDownCoordinates[1]}
            characters={characters}
            charactersImage={charactersImage}
            setClickedCharacter={setClickedCharacter}
          />
        ) : null}
      </div>
    </div>
  );
}
