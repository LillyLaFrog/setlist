import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

function ArtistCard({artist}){

    const navigation = useNavigation();

    function detailsNavigator(artistID){
        navigation.navigate('ArtistDetails', {artistID: artistID})
    }

    return(
        <Pressable style={({pressed})=>[styles.card, pressed && styles.pressed]} onPress={detailsNavigator.bind(this, artist.artistID)}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: artist.coverImageUri, height:160, width:160}} />
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
        margin: 10,
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