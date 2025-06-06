import { FlatList } from "react-native";

function ListArtists({artists}){

    function itemRenderer(item){

    }

    <FlatList data={artists} numColumns={2} renderItem={itemRenderer} keyExtractor={({item})=> item.artistID} />
}