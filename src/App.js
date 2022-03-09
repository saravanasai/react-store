import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import Layout from "./Layout";

function App() {
  
  const {authState,setAuthState}=useAuth()
 
  return (
    <>
        <div className="container py-3">
          {authState.auth? <Layout /> : <Navigate to="/login" replace />}
        </div>
    </>
  );
}

export default App;
