import styles from "./styles.module.css";

export const Bar = ({ label, value, maximumValue }) => {
  return (
    <div className={styles.main}>
      <div className={styles.label}>{label}</div>

      <div className={styles.maximumValue}>
        <div
          className={styles.value}
          style={{ width: `${(value / maximumValue) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};
