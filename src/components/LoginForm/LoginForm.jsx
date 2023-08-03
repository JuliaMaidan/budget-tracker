import { Link } from "react-router-dom";
import google from "../../images/google.png";
import styles from "./loginForm.module.scss";

const LoginForm = () => {
  return (
    <div className={styles.login}>
      <p className={styles.login__caption}>
        You can log in with your Google Account:
      </p>
      <button className={styles.login__google_btn}>
        <img src={google} alt="google" className={styles.login__google_img} />
        Google
      </button>
      <p className={styles.login__text}>
        Or log in using an email and password, after registering:
      </p>
      <form className={styles.login__form} action="submit">
        <div className={styles.login__input_box}>
          <label className={styles.login__label}>Email:</label>
          <input
            className={styles.login__input}
            type="email"
            placeholder="your@email.com"
          />
        </div>
        <div className={styles.login__input_box}>
          <label className={styles.login__label}>Password:</label>
          <input className={styles.login__input} type="password" />
        </div>
        <div className={styles.login__btn_box}>
          <Link to="/reports" className={styles.login__btn}>
            LOG IN
          </Link>
          <Link to="/reports" className={styles.login__btn}>
            REGISTRATION
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
