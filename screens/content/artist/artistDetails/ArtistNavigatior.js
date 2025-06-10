import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ArtistInfo from "./ArtistInfo";
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import IconButton from "../../../../components/ui/IconButton";
import { createContext, useState } from "react";
import { Artist } from "../../../../models/Artist";
import Events from "./Events";
import EventNavigator from "./EventNavigator";
import { fetchArtistInfo } from "../../../../util/discogs";

export const ArtistContext = createContext({ID:''});


function ArtistNavigatior({navigation, route}){
    

    const Tabs = createBottomTabNavigator();


    return(
        <ArtistContext.Provider value={{ID:route.params.artistID}}>
            <Tabs.Navigator 
            screenOptions={{
                headerShown: true,
                headerTitle: '',
                headerTitleAlign: 'center',
                headerLeft: ({tintColor}) => <IconButton icon='home' size={24} color={tintColor} onPress={()=>navigation.goBack()} />, //go back button
                headerRight: ({tintColor}) => <IconButton icon='star-outline' size={24} color={tintColor} onPress={()=>navigation.goBack()} />, //favorite button
            }}>
                <Tabs.Screen name="ArtistInfo" component={ArtistInfo}
                options={{
                    tabBarIcon: ({size, color})=><Ionicons name="document-text" color={color} size={size} />,
                    title: "Info",
                }}/>
                {/* <Tabs.Screen name="ArtistAlbums" /> */}
                <Tabs.Screen name="Events" component={EventNavigator} 
                options={{
                    tabBarIcon: ({size, color})=><MaterialCommunityIcons name='microphone-variant' color={color} size={size} />,
                }}
                tabBar={()=><></>}/>
            </Tabs.Navigator>
        </ArtistContext.Provider>

    );
};

export default ArtistNavigatior;