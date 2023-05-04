import { useState, useEffect } from "react";
import "./App.css";
import { BattleModeButton } from "./screenComponents/battleMode/battleModeButton/BattleModeButton";
import { BattleModeScreen } from "./screenComponents/battleMode/battleModeScreen/BattleModeScreen";
import { SpectatorModeButton } from "./screenComponents/spectatorMode/spectatorModeButton/SpectatorModeButton";
import BattleBackground from "../assets/backgrounds/colosseum.jpg";
import StartBackground from "../assets/backgrounds/startpage-transformed.jpeg";
import { GameOver } from "./screenComponents/endScreen/GameOver";

function App() {
  const [mode, setMode] = useState("start");
  const [background, setBackground] = useState(1);
  const [title, setTitle] = useState(1);
  const [winner, setWinner] = useState();

  const handleBackgroundChange = (backgroundNumber: number) => {
    setBackground(backgroundNumber);
  };

  const handleTitleChange = (titleNumber: number) => {
    setTitle(titleNumber);
  };

  const getBackground = () => {
    if (background === 1) {
      return StartBackground;
    } else if (background === 2) {
      return BattleBackground;
    }
  };

  const getTitle = () => {
    if (title === 1) {
      return "visible";
    } else if (title === 2) {
      return "hidden";
    }
  };

  useEffect(() => {
    const main = document.getElementById("background");
    const title = document.getElementById("title");
    title.style.visibility = getTitle();
    main.style.backgroundImage = `url(${getBackground()})`;
    // main.style.
  }, [background, title]);

  return (
    <div className="main" id="background">
      <div className="screen">
        {mode === "start" && (
          <SpectatorModeButton onSpectateClick={() => setMode("spectate")} />
        )}

        {mode === "start" && (
          <BattleModeButton
            onStartClick={() => {
              setMode("battleMode");
              handleBackgroundChange(2);
              handleTitleChange(2);
            }}
          />
        )}

        <div className="title" id="title">
          Invicta
        </div>

        {mode === "battleMode" && (
          <BattleModeScreen
            onGameEnd={(winner) => {
              setWinner(winner);
              setMode("gameOver");
            }}
          />
        )}

        {mode === "spectate" && <>Spectate</>}

        {mode === "gameOver" && (
          <GameOver
            winner={winner}
            onStartClick={() => {
              setWinner(undefined);
              setMode("battleMode");
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
