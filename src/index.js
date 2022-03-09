import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import App from "./App"
import Login from "./pages/Login/inedx"
import NotFound from "./pages/404"
import routes from "./routes"
import AuthProvider from "./context/Auth"

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<AuthProvider ><App /></AuthProvider>}> 
        {routes.map(route => {
          return <Route path={route.path} element={<route.component />} />
        })}
        </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>,
  document.getElementById("root")
)

reportWebVitals()
