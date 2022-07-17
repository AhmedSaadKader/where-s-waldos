import styles from "./Header.module.css";
import logo2 from "../images/waldoLogo2.png";
import Authentication from "../authentication/Authentication";
import Timer from "../timer/Timer";

export default function Header(props) {
  const user = props.user;
  const setUser = props.setUser;
  return (
    <header>
      <img src={logo2} alt="Logo" />
      <Timer timer={props.timer} setTimer={props.setTimer} />
      <div>
        <Authentication user={user} setUser={setUser} />
      </div>
    </header>
  );
}
