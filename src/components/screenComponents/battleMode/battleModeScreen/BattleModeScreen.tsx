import styles from "./styles.module.css";
import { PlayerSummary } from "../../../playerComponents/playerSummary/PlayerSummary";
import { useState } from "react";
import { AbilityMenu } from "../abilityMenu/AbilityMenu";
import { ThracianStats } from "../../../combatantComponents/combatantThracian/ThracianStats";
import { BattleAnnouncer } from "../battleAnnouncer/BattleAnnouncer";

export const BattleModeScreen = () => {
  return (
    <div className={styles.main}>
      <div className={styles.user}>
        <div className={styles.playerSprite}>
          <img src={ThracianStats.img} />
        </div>
        <div className={styles.abilities}>
          <AbilityMenu
            onAttack={() => console.log("Attack!")}
            onMagic={() => console.log("Block!")}
            onHeal={() => console.log("Heal!")}
          />
        </div>
        <div className={styles.summary}>
          <PlayerSummary
            main
            health={playerHealth}
            maximumHealth={ThracianStats.maximumHealth}
            userName={"User"}
            level={ThracianStats.level}
            className={ThracianStats.className}
          />
        </div>
      </div>
      <div className={styles.battleAnnouncer}>
        <BattleAnnouncer
          message={announcerMessage || `What will ${"User"} do?`}
        />
      </div>
      <div className={styles.enemy}>
        <div className={styles.enemySprite}>
          <img src={ThracianStats.img} />
        </div>
        <div className={styles.abilities}>
          <AbilityMenu
            onAttack={() => console.log("Attack!")}
            onMagic={() => console.log("Block!")}
            onHeal={() => console.log("Bandage!")}
          />
        </div>
        <div className={styles.summary}>
          <PlayerSummary
            health={enemyHealth}
            maximumHealth={ThracianStats.maximumHealth}
            userName={"Schmuck"}
            level={ThracianStats.level}
            className={ThracianStats.className}
          />
        </div>
      </div>
    </div>
  );
};
