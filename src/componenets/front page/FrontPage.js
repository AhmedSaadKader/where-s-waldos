import styles from "./FrontPage.module.css";
import firstImage from "../images/whereswaldofirst.jpg";
import { Link } from "react-router-dom";

export default function FrontPage() {
  return (
    <div className={styles.frontPage}>
      <Link to="firstGame">
        <div className={styles.cards}>
          <img src={firstImage} alt={"first image"} />
          <div>
            <h4>Level 1</h4>
          </div>
        </div>
      </Link>
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
      <div className={styles.cards}>
        <img src={firstImage} alt={"first image"} />
        <div>
          <h4>Level 1</h4>
        </div>
      </div>
    </div>
  );
}
