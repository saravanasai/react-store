import React from "react";
import useAuth from "../../hooks/useAuth";

export const AuthContext=React.createContext()

  
const AuthProvider = ({children}) => {
  
    const authData=useAuth()
 

    return (<AuthContext.Provider value={authData}>{children}</AuthContext.Provider>  );
}
  


export default AuthProvider;







