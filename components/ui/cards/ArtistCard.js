import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

function ArtistCard({artist}){

    const navigation = useNavigation();

    function detailsNavigator(artistId){
        navigation.navigate('ArtistDetails', {artistId: artistId})
    }

    return(
        <Pressable style={({pressed})=>[styles.card, pressed && styles.pressed]} onPress={detailsNavigator.bind(this, artist.artistId)}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: artist.coverImageUri, width:160}} />
            </View>
           
            <Text style={styles.text}>{artist.artistName}</Text>
        </Pressable>
    );
}

export default ArtistCard;

const styles = StyleSheet.create({
    card:{
        backgroundColor:'white',
        alignItems: 'center',
        margin:15,
        width: 180,
        height: 216,
    },
    imageContainer:{
        flex: 5,
        margin: 10,
    },
    image:{
        flex: 1,
    },
    text:{
        flex:1,
        fontSize:16,
    },
    pressed:{
        opacity: .7,
    }
});