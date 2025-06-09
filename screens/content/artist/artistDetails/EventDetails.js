import { View, ScrollView, StyleSheet, Text, Image, Linking } from "react-native";
import Button from "../../../../components/ui/Button";
import { Colors } from "../../../../constants/Colors";
import { Event } from "../../../../models/Event";
import { useEffect, useState } from "react";
import { fetchEventInfo } from "../../../../util/ticketmaster";
import Loading from "../../../../components/ui/Loading";

function EventDetails({navigation, route}){
    
    const [event, setEvent] = useState(new Event);

    useEffect(()=>{
        async function getEvent() {
            console.log(route)
            const event = await fetchEventInfo(route.params.eventId);
            setEvent(event);
        }
        getEvent();
    },[]);

    if(!!event){
        return(
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <ScrollView>
                        <Image style={styles.image} source={{uri: event.imageUri}}/>
                        <Text style={styles.title}>{event.title}</Text>
                        <Text style={styles.info}>{event.date}</Text>
                        <Text style={styles.info}>{event.location.address}</Text>
                        <Text style={styles.desc}>{event.desc}</Text>
                    </ScrollView>
                </View>
                <View style={styles.buttonContainer}>
                    <Button color={Colors.coolA700} onPress={navigation.goBack}>All Events</Button>
                    <Button color={Colors.coolB700} onPress={()=>navigation.navigate('Map', event.location.latlng)}>View on Map</Button>
                    <Button color={Colors.warmB700} onPress={()=>!!event.url && Linking.openURL(event.url)}>Tickets</Button>
                </View>
            </View>
        );
    } else {
        return(
            <Loading />
        );
    }
}

export default EventDetails;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start'
    },
    contentContainer:{
        flex: 9,
    },
    buttonContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    title:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24
    },
    image: {
        width: '100%',
        height: 300,
    },
    info:{
        paddingVertical: 8,
        textAlign: 'center',
        fontSize: 16,
    },
    desc:{
        paddingVertical: 8,
        paddingHorizontal: 32,
        fontSize: 20
    },
});