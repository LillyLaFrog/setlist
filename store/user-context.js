import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useCallback, useEffect, useState } from "react";
import { addUserData, getUserData } from "../util/database";

export const userContext = createContext({
    favorites: '',
    profilePic: '',
    sync: (token)=>{},
    addToFavorites: (artist, token)=>{},
    removeFromFavorites: (artistID, token)=>{},
    setProfilePic: (path, token)=>{},
});

export default function UserContextProvider({children}){

    const [favorites, setFavorites] = useState([]);
    const [profilePic, setProfilePic] = useState();
    
    async function sync(token){
        const response = await getUserData(token);
        
        setFavorites(response.data?.favorites);
        setProfilePic(response.data?.profilePic);
    }

    function addToFavoritesHandler(artist, token){
        
        const newFavs = [...favorites, artist];

        setFavorites(newFavs);
        addUserData(token,{favorites: newFavs});
    }

    function removeFromFavoritesHandler(artistID, token){

        const newFavs = favorites.filter((artist)=> artist.artistID != artistID);

        setFavorites(newFavs);
        addUserData(token,{favorites: newFavs});
    }

    function setProfilePicHandler(path, token){
        addUserData(token, {profilePic: path});
        setProfilePic(path);
    }

    const value = {
        favorites: favorites,
        profilePic: profilePic,
        sync:sync,
        addToFavorites:addToFavoritesHandler,
        removeFromFavorites:removeFromFavoritesHandler,
        setProfilePic:setProfilePicHandler,
    };

    return(<userContext.Provider value={value}>{children}</userContext.Provider>);
}