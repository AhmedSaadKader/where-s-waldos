import waldoImage from "../componenets/images/waldoImage.png";
import styles from "./Dropdown.module.css";

export default function Dropdown(props) {
  const myStyle = {
    left: props.xCoord,
    top: props.yCoord,
  };

  return (
    <div className={styles.dropdown} style={myStyle}>
      <div className={styles.dropdownChoice}>
        <img src={waldoImage} alt="waldo" />
        <div>Waldo</div>
      </div>
      <div className={styles.dropdownChoice}>
        <img src={waldoImage} alt="waldo" />
        <div>Waldo</div>
      </div>
    </div>
  );
}
