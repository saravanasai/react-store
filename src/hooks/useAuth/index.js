import {  useState } from "react";


const useAuth = () => {


    const [authState,setAuthState]=useState({auth:true,permisson:{home:true,balance:true}})

 
    return {authState,setAuthState};
}
 
export default useAuth;