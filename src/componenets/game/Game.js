import styles from "./Game.module.css";
import image from "../images/whereswaldofirst.jpg";

export default function Game() {
  return (
    <div className={styles.gameDiv}>
      <img src={image} alt="Waldo where?" className={styles.gameImage} />
    </div>
  );
}
