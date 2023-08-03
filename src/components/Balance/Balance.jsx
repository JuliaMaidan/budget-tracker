import { RiBarChartFill } from "react-icons/ri";
import styles from "./balance.module.scss";

const Balance = () => {
  return (
    <div className={styles.container}>
      <div className={styles.balance}>
        <p className={styles.balance__capt}>Balance:</p>
        <div className={styles.balance__amount_box}>
          <p className={styles.balance__amount}>00.00 UAH</p>
        </div>
        <div className={styles.balance__amount_box}>
          <p className={styles.balance__conf}>Confirm</p>
        </div>
      </div>
      <div className={styles.reports}>
        <p className={styles.reports__capt}>Reports</p>
        <RiBarChartFill className={styles.reports__svg} />
      </div>
    </div>
  );
};

export default Balance;
