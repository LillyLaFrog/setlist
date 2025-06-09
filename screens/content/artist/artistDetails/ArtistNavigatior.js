import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ArtistInfo from "./ArtistInfo";
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import IconButton from "../../../../components/ui/IconButton";
import { createContext, useState } from "react";
import { Artist } from "../../../../models/Artist";
import Events from "./Events";


export const ArtistIDContext = createContext({ID:''});

function ArtistNavigatior({navigation, route}){
    
    const Tabs = createBottomTabNavigator();
    
    const [artist, setArtist] = useState(new Artist);

    return(
        <ArtistIDContext.Provider value={{ID:route.params.artistID}}>
            <Tabs.Navigator 
            screenOptions={{
                headerShown: false,
            }}>
                <Tabs.Screen name="ArtistInfo" component={ArtistInfo}
                options={{
                    tabBarIcon: ({size, color})=><Ionicons name="document-text" color={color} size={size} />,
                    title: "Info",
                }}/>
                {/* <Tabs.Screen name="ArtistAlbums" /> */}
                <Tabs.Screen name="Events" component={Events} 
                options={{
                    tabBarIcon: ({size, color})=><MaterialCommunityIcons name='microphone-variant' color={color} size={size} />,
                    title: "Events",
                }}/>
            </Tabs.Navigator>
        </ArtistIDContext.Provider>

    );
};

export default ArtistNavigatior;