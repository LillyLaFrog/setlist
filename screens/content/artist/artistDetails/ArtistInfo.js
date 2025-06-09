import { useCallback, useContext, useEffect, useState } from "react";
import { ArtistIDContext } from "./ArtistNavigatior";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { fetchArtistInfo } from "../../../../util/discogs";
import ArtistCard from "../../../../components/ui/cards/ArtistCard";
import { Artist } from "../../../../models/Artist";

function ArtistInfo(){
    const artistIDCtx = useContext(ArtistIDContext);
    console.log(artistIDCtx)

    const [artist, setArtist] = useState(new Artist);
    
    
    
    useEffect(()=>{
        async function setArtistInfo(){
            setArtist(await fetchArtistInfo(artistIDCtx.ID));
            
        }
        setArtistInfo();
    },[])
    
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>{artist.artistName}</Text>
            <Image style={styles.image} source={{uri:artist.coverImageUri}} />
            <Text style={styles.desc}>{artist.artistDesc}</Text>
        </ScrollView>
    );
}

export default ArtistInfo;

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    image:{
        width:'100%',
        height:200,
    },
    desc:{
        fontSize: 20,
        textAlign: 'center',
    },
});