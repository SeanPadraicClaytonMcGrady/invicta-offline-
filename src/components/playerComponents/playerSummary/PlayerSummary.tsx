import { Bar } from "../../Bar/Bar";
import styles from "./styles.module.css";

export const PlayerSummary = ({
  main = false,
  userName,
  className,
  level,
  health,
  maximumHealth,
}) => {
  const red = "#821200";
  const blue = "#1953cb";
  return (
    <div style={{ backgroundColor: main ? red : blue }} className={styles.main}>
      <div className={styles.information}>
        <div className={styles.className}>Class: {className}</div>
        <div className={styles.userName}>{userName}</div>
        <div className={styles.level}>Level : {level}</div>
      </div>

      <div className={styles.healthBar}>
        <Bar label="HP :" value={health} maximumValue={maximumHealth} />
      </div>
    </div>
  );
};
