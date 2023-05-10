import { useEffect, useState } from "react";
import { ThracianStats } from "../../../combatantComponents/combatantThracian/ThracianStats";
import { attack } from "./BattleCalculations";
import { wait } from "./wait";

export const useBattleSequence = (sequence) => {
  const [turn, setTurn] = useState(0);
  const [inSequence, setInSequence] = useState(false);
  const [enemyHealth, setEnemyHealth] = useState(ThracianStats.maximumHealth);
  const [playerHealth, setPlayerHealth] = useState(ThracianStats.maximumHealth);
  const [enemyStats, setEnemyStats] = useState(ThracianStats);
  const [playerStats, setPlayerStats] = useState(ThracianStats);

  const [announcerMessage, setAnnouncerMessage] = useState("");
  const [playerAnimation, setPlayerAnimation] = useState("static");
  const [enemyAnimation, setEnemyAnimation] = useState("static");

  useEffect(() => {
    const { mode, turn } = sequence;

    if (mode) {
      const attacker = turn === 0 ? playerStats : enemyStats;
      const defender = turn === 0 ? enemyStats : playerStats;
      switch (mode) {
        case "attack":
          const damage = attack({ attacker, defender });

          (async () => {
            setInSequence(true);
            setAnnouncerMessage(`${attacker.className} attacks!`);

            await wait(1000);

            turn === 0
              ? setPlayerAnimation("attack")
              : setEnemyAnimation("attack");
            await wait(500);

            turn === 0
              ? setPlayerAnimation("static")
              : setEnemyAnimation("static");
            await wait(500);

            turn === 0
              ? setPlayerAnimation("damage")
              : setEnemyAnimation("damage");
            await wait(750);

            turn === 0
              ? setPlayerAnimation("static")
              : setEnemyAnimation("static");
            setAnnouncerMessage(`${defender.className} felt that!`);
            turn === 0
              ? setEnemyHealth((h) => (h - damage > 0 ? h - damage : 0))
              : setPlayerHealth((h) => (h - damage > 0 ? h - damage : 0));

            //Temporary work on attempting to make a block skill.
            // turn === 0
            //   ? setPlayerProtection((p) => ThracianStats.protection)
            //   : setEnemyProtection((p) => ThracianStats.protection);
            await wait(2000);

            setAnnouncerMessage(`Now it's ${defender.className}'s turn!`);

            setTurn(turn === 0 ? 1 : 0);
            setInSequence(false);
          })();
          break;
        case "bandage":
          (async () => {
            setInSequence(true);
            setAnnouncerMessage(
              `${attacker.className} wraps himself with a bandage!`
            );

            await wait(1750);

            turn === 0
              ? setPlayerAnimation("bandage")
              : setEnemyAnimation("bandage");
            await wait(500);

            turn === 0
              ? setPlayerAnimation("static")
              : setEnemyAnimation("static");
            await wait(500);
            setAnnouncerMessage(`${attacker.className} feels better!`);

            turn === 0
              ? setPlayerHealth((h) =>
                  h + attacker.medical + attacker.level <=
                  attacker.maximumHealth
                    ? h + attacker.medical
                    : attacker.maximumHealth
                )
              : setEnemyHealth((h) =>
                  h + attacker.medical + attacker.level <=
                  attacker.maximumHealth
                    ? h + attacker.medical
                    : attacker.maximumHealth
                );
            await wait(2500);

            setAnnouncerMessage(`Now it's ${defender.className}'s turn!`);

            setTurn(turn === 0 ? 1 : 0);
            setInSequence(false);
          })();
          break;
      }
    }
  }, [sequence]);

  return {
    turn,
    inSequence,
    enemyHealth,
    playerHealth,
    announcerMessage,
    enemyStats,
    playerStats, //In the future, enemy & player Stats should be swapped out for profile names.
    // playerAnimation,
    // enemyAnimation,
  };
};
