import { Keyboard, StyleSheet, TextInput, View } from "react-native";
import BackgroundTexture from "../../../components/ui/BackgroundTexture";
import ListArtists from "../../../components/ui/lists/ListArtists";
import IconButton from "../../../components/ui/IconButton";
import {Colors} from '../../../constants/Colors';
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { fetchArtists } from "../../../util/discogs";

function SearchArtists() {

    const [search, setSearch] = useState();

    function searchInputHandler(text){
        setSearch(text);
    }

    const [artists, setArtists] = useState();

    async function searchHandler(){
        Keyboard.dismiss();
        const artists = await fetchArtists(search);
        setArtists(artists);
    }
    

    return(
        <BackgroundTexture texture='corkboard' keepHeight={true}>
            <View style ={styles.container}>
                <View style={styles.searchBar}>
                    <LinearGradient style={styles.searchGradient} colors={[Colors.warmA300, Colors.coolA300]} />
                    
                    <TextInput placeholder="Search..." style={styles.searchInput} onChangeText={searchInputHandler} onEndEditing={searchHandler} />

                    <View style={styles.searchBtn}>
                        <IconButton icon='search' size={24} onPress={searchHandler}/>
                    </View>
                </View>
                {!!artists && <ListArtists artists={artists} />}
            </View>
        </BackgroundTexture>
    );
}

export default SearchArtists;

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        flex: 1,
    },
    searchBar:{
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginHorizontal: 32,
        marginVertical: 16,
        overflow: 'hidden',
        paddingLeft: 8,
    },
    searchInput:{
        flex:1,
        height: 40,
    },
    searchGradient:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 40,
    },
    searchBtn: {
        backgroundColor: Colors.coolB500,
        height: 40,
    }
});