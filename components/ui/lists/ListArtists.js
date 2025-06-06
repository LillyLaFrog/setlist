import { FlatList } from "react-native";
import ArtistCard from "../cards/ArtistCard";

function ListArtists({artists}){

    function itemRenderer({item}){
        return(<ArtistCard artist={item} />);
    }

    return(
        <FlatList 
        data={artists} 
        numColumns={2} 
        renderItem={itemRenderer} 
        keyExtractor={(item)=> item.artistID} />
    );
}

export default ListArtists;