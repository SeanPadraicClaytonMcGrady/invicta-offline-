import { useState, useEffect } from "react";
import "./App.css";
import { BattleModeButton } from "./screenComponents/battleMode/battleModeButton/BattleModeButton";
import { BattleModeScreen } from "./screenComponents/battleMode/battleModeScreen/BattleModeScreen";
import { SpectatorModeButton } from "./screenComponents/spectatorMode/spectatorModeButton/SpectatorModeButton";
import BattleBackground from "../assets/backgrounds/colosseum.jpg";
import StartBackground from "../assets/backgrounds/startpage-transformed.jpeg";

function App() {
  const [mode, setMode] = useState("start");
  const [background, setBackground] = useState(1);

  const handleBackgroundChange = (backgroundNumber: number) => {
    setBackground(backgroundNumber);
  };

  const getBackground = () => {
    if (background === 1) {
      return StartBackground;
    } else if (background === 2) {
      return BattleBackground;
    }
  };

  useEffect(() => {
    const main = document.getElementById("background");
    main.style.backgroundImage = `url(${getBackground()})`;
    // main.style.
  }, [background]);

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
            }}
          />
        )}

        {mode === "battleMode" && <BattleModeScreen />}

        {mode === "spectate" && <>Spectate</>}

        {mode === "gameOver" && <>Game Over</>}
      </div>
    </div>
  );
}

export default App;
