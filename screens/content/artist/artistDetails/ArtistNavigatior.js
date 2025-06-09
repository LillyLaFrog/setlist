import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function ArtistNavigatior (){
    
    const Tabs = createBottomTabNavigator();
    
    return(
        <Tabs.Navigator>
            <Tabs.Screen name="ArtistInfo" />
            <Tabs.Screen name="ArtistAlbums" />
            <Tabs.Screen name="ArtistEvents" />
        </Tabs.Navigator>
    );
};