import styles from "./styles.module.css";

export const BattleModeButton = ({ onStartClick }) => {
  return (
    <div className={styles.main}>
      <button className={styles.BattleModeButton} onClick={onStartClick}>
        Slay
      </button>
    </div>
  );
};
