import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import Events from "./Events";
import EventDetails from "./EventDetails";
import Map from "../../Map";

function EventNavigator() {
    const Stack = createNativeStackNavigator();



    return(
        <Stack.Navigator 
        screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name="Events" component={Events} 
            options={{
                headerShown:false
            }} />
            <Stack.Screen name="EventDetails" component={EventDetails} />
            <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
    );
}

export default EventNavigator;