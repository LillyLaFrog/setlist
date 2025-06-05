import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useState } from "react";

export const authContext = createContext({
    token: '',
    isLoggedIn: false,
    auth: ()=>{},
    logout: ()=>{},
});

export default function AuthContextProvider({children}){

    const [authToken, setAuthToken] = useState(null);

    function auth(token){
        setAuthToken(token);
        AsyncStorage.setItem('token', token);
    };

    function logout(){
        setAuthToken(null);
        AsyncStorage.removeItem('token');
    };

    const value = {
        token: authToken,
        isLoggedIn: !!authToken,
        auth:auth,
        logout:logout,
    };

    return(<authContext.Provider value={value}>{children}</authContext.Provider>);
}