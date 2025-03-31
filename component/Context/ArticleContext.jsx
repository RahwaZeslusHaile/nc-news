import { createContext, useState} from "react";
export const UserContext = createContext();
export const UseProvide =({children})=>{
    const [LoggedInUser,setLoggedInUser]= useState("Gameboy")
    return <UserContext.Provider value ={{LoggedInUser ,setLoggedInUser}}>{children}</UserContext.Provider>}
     



    export default UserContext