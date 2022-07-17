import styles from "./Header.module.css";
import logo from "../images/waldoLogo.jpg";
import logo2 from "../images/waldoLogo2.png";

export default function Header() {
  return (
    <header>
      <img src={logo2} alt="Logo" />
      <div>Timer</div>
      <div>Login</div>
    </header>
  );
}
