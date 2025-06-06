import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function ArtistNavigatior (){
    
    const Tabs = createBottomTabNavigator();
    
    return(
        <Tabs.Navigator>
            <Tabs.Screen name="ArtistInfo" />
        </Tabs.Navigator>
    );
};