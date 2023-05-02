import styles from "./styles.module.css";

export const SpectatorModeButton = ({ onSpectateClick }) => {
  return (
    <div className={styles.main}>
      <button className={styles.SpectatorModeButton} onClick={onSpectateClick}>
        Spectate
      </button>
    </div>
  );
};
