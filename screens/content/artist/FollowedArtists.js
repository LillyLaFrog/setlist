import { StyleSheet, View } from "react-native";

import BackgroundTexture from "../../../components/ui/BackgroundTexture";
import ArtistCard from "../../../components/ui/cards/ArtistCard";
import { Artist } from "../../../models/Artist";

function FollowedArtists() {
    const imageURI = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeu-4mZFfjrNIr9K05_D3AgfZeem9HFMf3u_QLYnxTSqrbO30lb57h02AJsDtt9NHrDrA3-Z8gvtltAvvejodxdA'
    const artist = new Artist('Dallon Weekes', imageURI, 2)
    return(
        <BackgroundTexture texture='corkboard'>
            <View>
                <ArtistCard artist={artist} />
            </View>
        </BackgroundTexture>
    );
}

export default FollowedArtists;

const styles = StyleSheet.create({
    background:{
        flex:1,
    }
});