import { FlatList, StyleSheet } from "react-native";
import ArtistCard from "../cards/ArtistCard";

function ListArtists({artists}){

    function itemRenderer({item}){
        return(<ArtistCard artist={item} />);
    }

    return(
        <FlatList 
        style={styles.list}
        data={artists} 
        numColumns={2} 
        renderItem={itemRenderer} 
        keyExtractor={(item)=> item.artistID} />
    );
}

export default ListArtists;

const styles = StyleSheet.create({
    list: {
        flex:1,
    }
});