import React from "react";
import { Navigate } from "react-router-dom";
import Layout from "./Layout";


function App() {

  const auth=true


  return (
    <>
      <div className="container py-3">
          {auth?<Layout/>:<Navigate to="/login" replace/>}
      </div>
    </>
  );
}

export default App;
