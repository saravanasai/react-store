import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Balance = () => {

  const {authState}=useAuth()
  const userHasAccess=authState.permisson.balance
    return ( 
        <>
        {userHasAccess?<> balance Page  $40,0000</>:<Navigate to="/unauthenticted" replace />} 
        </>
     );
}
 
export default Balance;