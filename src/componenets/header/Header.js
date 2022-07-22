import styles from "./Header.module.css";
import logo2 from "../images/waldoLogo2.png";
import Authentication from "../authentication/Authentication";
import { Link } from "react-router-dom";

export default function Header(props) {
  const user = props.user;
  const setUser = props.setUser;
  return (
    <header>
      <Link to="/">
        <img src={logo2} alt="Logo" />
      </Link>

      <div>
        <Authentication user={user} setUser={setUser} />
      </div>
    </header>
  );
}
