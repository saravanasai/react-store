import React, { useContext } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
