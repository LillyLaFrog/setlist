import { useNavigation } from "@react-navigation/native";
import { Event } from "../../../models/Event";
import { Pressable, StyleSheet, View , Image, Text} from "react-native";

function EventCard({event}){


    const navigation = useNavigation();

    function detailsNavigator(eventId){
        navigation.navigate('EventDetails', {eventId: eventId})
    }


    return(
        <Pressable style={({pressed})=>[styles.card, pressed && styles.pressed]} onPress={detailsNavigator.bind(this, event.id)}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: event.imageUri, height:160, width:160}} />
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{event.title}</Text>
                <Text style={styles.info}>{event.date}</Text>
                <Text style={styles.info}>{event.location.address}</Text>
            </View>
        </Pressable>
    );
}

export default EventCard;

const styles = StyleSheet.create({
    card:{
        flex: 1,
        flexDirection: 'row',
        margin: 12,
        borderRadius:8,
        overflow: 'hidden',
        height:100,
        backgroundColor: 'white',
    },
    pressed:{
        opacity: .7
    },
    imageContainer:{
        flex: 1
    },
    image:{
        flex: 1,
        width:100
    },
    detailsContainer:{
        flex: 2,
        flexDirection: 'column',
        padding:8,
    },
    title:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    info:{
        fontSize: 16,
    }
});