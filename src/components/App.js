import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Layout from "./Layout/Layout";

const Home = lazy(() => import("../pages/Home/Home.jsx"));
const Report = lazy(() => import("../pages/Report/Report"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="reports" element={<Report />} />
      </Route>
    </Routes>
  );
};

export default App;
