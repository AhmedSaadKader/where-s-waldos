import styles from "./Dropdown.module.css";

export default function Dropdown({ xCoord, yCoord, characters, charactersImage, setClickedCharacter }) {
  const myStyle = {
    left: xCoord,
    top: yCoord,
  };

  const charactersIcons = characters.map((character) => {
    return (
      <div className={styles.dropdownChoice} onClick={() => setClickedCharacter(character)} key={character}>
        <img src={charactersImage[character]} alt={character} />
        <div>{character}</div>
      </div>
    );
  });
  // console.log(characters);
  // console.log(charactersImage["waldo"]);
  // console.log(charactersImage[characters]);

  return (
    <div className={styles.dropdown} style={myStyle}>
      {charactersIcons}
    </div>
  );
}
