import styles from "./Header.module.css";
import logo2 from "../images/waldoLogo2.png";
import Authentication from "../authentication/Authentication";
import Timer from "../timer/Timer";
import { Link } from "react-router-dom";

export default function Header(props) {
  const user = props.user;
  const setUser = props.setUser;
  return (
    <header>
      <Link to="/">
        <img src={logo2} alt="Logo" />
      </Link>
      <Timer timer={props.timer} setTimer={props.setTimer} />
      <div>
        <Authentication user={user} setUser={setUser} />
      </div>
    </header>
  );
}
