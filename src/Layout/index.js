import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import routes from "../routes";

const Layout = () => {
    return ( 
        <>
        <Header />
        <main>
          <Routes>
            {routes.map((route) => {
              return <Route path={route.path} element={<route.component />} />;
            })}
          </Routes>
          
          <Outlet />
        </main>
        </>
     );
}
 
export default Layout;