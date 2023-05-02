import styles from "./styles.module.css";

export const AbilityMenu = ({ onAttack, onMagic, onHeal }) => {
  return (
    <div className={styles.main}>
      <button onClick={onAttack} className={styles.option}>
        Attack
      </button>
      <button onClick={onMagic} className={styles.option}>
        Block
      </button>
      <button onClick={onHeal} className={styles.option}>
        Bandage
      </button>
    </div>
  );
};
