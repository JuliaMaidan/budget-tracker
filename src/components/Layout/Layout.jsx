import { Suspense } from "react";
import { Outlet } from "react-router-dom";
// import styles from "./layout.module.scss";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
