// import { useState } from "react";
import logo from "../../images/logo.png";
import { RiLogoutBoxRLine } from "react-icons/ri";
import styles from "./header.module.scss";

const Header = () => {
  // const currentURL = window.location.href;
  // const basePath = "http://localhost:3000/budget-tracker/";
  // const relativePath = currentURL.replace(basePath, "");
  // console.log(relativePath);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // if (relativePath !== "") {
  //   setIsLoggedIn(false);
  // }
  // setIsLoggedIn(true);

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <img src={logo} alt="logo" className={styles.header__logo_img} />
        </div>
        {/* {isLoggedIn && ( */}
        <div className={styles.header__user}>
          <div className={styles.header__user_avatar}>
            <p className={styles.header__user_letter}>U</p>
          </div>
          <p className={styles.header__user_name}>User Name</p>
          <span className={styles.header__user_span}></span>
          <p className={styles.header__user_exit}>Exit</p>
          <RiLogoutBoxRLine size={20} className={styles.header__user_svg} />
        </div>
        {/* )} */}
      </div>
    </header>
  );
};

export default Header;
