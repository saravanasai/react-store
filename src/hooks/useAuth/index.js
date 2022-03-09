import {  useState } from "react";


const useAuth = () => {


    const [authState,setAuthState]=useState({auth:true,permisson:{home:true,balance:false}})

 
    return {authState,setAuthState};
}
 
export default useAuth;
