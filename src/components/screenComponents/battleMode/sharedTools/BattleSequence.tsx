import { useState } from "react";
import { ThracianStats } from "../../../combatantComponents/combatantThracian/ThracianStats";

export const useBattleSequence = () => {
  const [turn, setTurn] = useState();
  const [inSequence, setInSequence] = useState(false);
  const [enemyHealth, setEnemyHealth] = useState(ThracianStats.maximumHealth);
  const [playerHealth, setPlayerHealth] = useState(ThracianStats.maximumHealth);

  const [announcerMessage, setAnnouncerMessage] = useState("");
  const [playerAnimation, setPlayerAnimation] = useState("static");
  const [enemyAnimation, setEnemyAnimation] = useState("static");
};
