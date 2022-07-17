import "./App.css";
import Header from "./componenets/header/Header";
import Game from "./componenets/game/Game";
import FrontPage from "./componenets/front page/FrontPage";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [user, setUser] = useState();
  const [timer, setTimer] = useState(0);
  console.log(user);

  return (
    <div className="App">
      <Header user={user} setUser={setUser} timer={timer} setTimer={setTimer} />
      <Game />
      <FrontPage />
    </div>
  );
}

export default App;
