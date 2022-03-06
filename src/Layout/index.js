import React from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import Header from "../components/Header"
import routes from "../routes"

const Layout = () => {
  return (
    <>
      <Header />
       <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
