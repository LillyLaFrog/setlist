import { FlatList, StyleSheet } from "react-native";
import EventCard from "../cards/EventCard";

function ListEvents({events}){

    function itemRenderer({item}){
        return(<EventCard event={item} />);
    }

    return(
        <FlatList 
        style={styles.list}
        data={events} 
        renderItem={itemRenderer} 
        keyExtractor={(item)=> item.id} />
    );
}

export default ListEvents;

const styles = StyleSheet.create({
    list: {
        flex:1,
    }
});