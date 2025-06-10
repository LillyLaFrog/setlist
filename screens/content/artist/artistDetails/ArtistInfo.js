import { useCallback, useContext, useEffect, useState } from "react";
import { ArtistContext } from "./ArtistNavigatior";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { fetchArtistInfo } from "../../../../util/discogs";
import ArtistCard from "../../../../components/ui/cards/ArtistCard";
import { Artist } from "../../../../models/Artist";

function ArtistInfo({navigation}){
    const artistCtx = useContext(ArtistContext);

    const [artist, setArtist] = useState(new Artist);
    
    
    useEffect(()=>{
        async function setArtistInfo(){
            setArtist(await fetchArtistInfo(artistCtx.ID));
            
        }
        setArtistInfo();
    },[])

    useEffect(()=>{
        navigation.setOptions({headerTitle: artist?.artistName});
    },[artist])
    
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Image style={styles.image} source={{uri:artist?.coverImageUri}} />
            <Text style={styles.desc}>{artist?.artistDesc}</Text>
        </ScrollView>
    );
}

export default ArtistInfo;

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
    },
    image:{
        width:'100%',
        height:300,
    },
    desc:{
        fontSize: 20,
        textAlign: 'center',
    },
});