import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Layout from "./Layout/Layout"
import routes from "./routes"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"

function App() {
  return (
    <>
    <div className="container py-3">
    <Routes>
    {routes.map(route => {
          return <Route path={route.path} element={<>heloo</>} />
        })}
    </Routes>
        <Header />
        <main>
          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
           
          </div>
        </main>
      </div>
    
      
    </>
  )
}

export default App
