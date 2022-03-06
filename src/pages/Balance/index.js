import React from "react";
import { Navigate } from "react-router-dom";


const Balance = () => {

  const userHasAccess=true
    return ( 
        <>
        {userHasAccess?<> balance Page  $40,0000</>:<Navigate to="/unauthenticted" replace />} 
        </>
     );
}
 
export default Balance;