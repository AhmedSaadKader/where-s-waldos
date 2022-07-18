import "./App.css";
import Header from "./componenets/header/Header";
import Game from "./componenets/game/Game";
import FrontPage from "./componenets/front page/FrontPage";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState();
  const [timer, setTimer] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Header user={user} setUser={setUser} timer={timer} setTimer={setTimer} />
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/firstGame" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
