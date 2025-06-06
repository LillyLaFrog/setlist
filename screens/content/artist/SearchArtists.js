import { StyleSheet, TextInput, View } from "react-native";
import BackgroundTexture from "../../../components/ui/BackgroundTexture";
import ListArtists from "../../../components/ui/lists/ListArtists";
import { Artist } from "../../../models/Artist";
import IconButton from "../../../components/ui/IconButton";
import {Colors} from '../../../constants/Colors';
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

function SearchArtists() {

    const [search, setSearch] = useState();

    function searchInputHandler(text){
        setSearch(text);
    }

    const [artists, setArtists] = useState();

    function searchHandler(){
        const imageURI = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeu-4mZFfjrNIr9K05_D3AgfZeem9HFMf3u_QLYnxTSqrbO30lb57h02AJsDtt9NHrDrA3-Z8gvtltAvvejodxdA'
        setArtists([new Artist(search, imageURI, 1)]);
    }
    

    return(
        <BackgroundTexture texture='corkboard' keepHeight={true}>
            <View>
                <View style={styles.searchBar}>
                    <LinearGradient style={styles.searchGradient} colors={[Colors.warmA300, Colors.coolA300]} />
                        <TextInput style={styles.searchInput} onChangeText={searchInputHandler} />
                        <IconButton icon='search' size={24} onPress={searchHandler}/>
                </View>
                {!!artists && <ListArtists artists={artists} />}
            </View>
        </BackgroundTexture>
    );
}

export default SearchArtists;

const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    },
    searchBar:{
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent:'space-between',
        marginHorizontal: '32',
        marginVertical: 16,
        overflow: 'hidden',
        paddingHorizontal: 8,
    },
    searchInput:{
        flex:1,
    },
    searchGradient:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 40,
    },
});