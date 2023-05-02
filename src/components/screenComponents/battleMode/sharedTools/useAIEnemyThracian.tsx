import { useEffect, useState } from "react";

export const useAIEnemyThracian = (turn: number) => {
  const [aiChoice, setAIChoice] = useState("");

  useEffect(() => {
    if (turn === 1) {
      const options = ["attack", "block", "bandage"];
      setAIChoice(options[Math.floor(Math.random() * options.length)]);
    }
  }, [turn]);

  return aiChoice;
};
