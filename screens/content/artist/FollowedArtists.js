import { StyleSheet, View } from "react-native";

import BackgroundTexture from "../../../components/ui/BackgroundTexture";
import ArtistCard from "../../../components/ui/cards/ArtistCard";
import { Artist } from "../../../models/Artist";
import ListArtists from "../../../components/ui/lists/ListArtists";

function FollowedArtists() {
    const imageURI = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeu-4mZFfjrNIr9K05_D3AgfZeem9HFMf3u_QLYnxTSqrbO30lb57h02AJsDtt9NHrDrA3-Z8gvtltAvvejodxdA'
    const artist = new Artist('Dallon Weekes', imageURI, 1)
    return(
        <BackgroundTexture texture='corkboard'>
            <View style={styles.container}>
                <ListArtists artists={[artist, artist, artist,artist,artist,artist,artist,artist,artist,artist,]} />
            </View>
        </BackgroundTexture>
    );
}

export default FollowedArtists;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    }
});