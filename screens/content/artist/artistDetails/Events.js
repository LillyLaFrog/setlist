import { useContext, useEffect, useState } from "react";
import { fetchArtistInfo } from "../../../../util/discogs";
import { fetchEvents } from "../../../../util/ticketmaster";
import { ArtistContext } from "./ArtistNavigatior";
import EventCard from "../../../../components/ui/cards/EventCard";
import { StyleSheet, Text, View } from "react-native";
import ListEvents from "../../../../components/ui/lists/ListEvents";

function Events(){
    const [events, setEvents] = useState(null);
    
    const artistIDCtx = useContext(ArtistContext)
    
    useEffect(()=>{
        async function getEvents(){
            const artist  = await fetchArtistInfo(artistIDCtx.ID);
            const events = await fetchEvents(artist.artistName);
            setEvents(events);
        }
        getEvents();
    },[])

    if(!!events){
        return (
            <View style={styles.container}>
                <ListEvents events={events} />
            </View>
        );
    } else {
        return (
            <View>
                <Text>loading/no events :(</Text>
            </View>
        )
    }

}

export default Events;

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});