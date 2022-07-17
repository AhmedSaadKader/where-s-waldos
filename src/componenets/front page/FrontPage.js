import styles from "./FrontPage.module.css";
import firstImage from "../images/whereswaldofirst.jpg";

export default function FrontPage() {
  return (
    <div className={styles.frontPage}>
      <div className={styles.cards}>
        <img src={firstImage} alt={"first image"} />
        <div>
          <h4>Level 1</h4>
        </div>
      </div>
      <div className={styles.cards}>
        <img src={firstImage} alt={"first image"} />
        <div>
          <h4>Level 1</h4>
        </div>
      </div>
    </div>
  );
}
