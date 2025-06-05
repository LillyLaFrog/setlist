import { StyleSheet, View } from "react-native";

import BackgroundTexture from "../../../components/ui/BackgroundTexture";

function FollowedArtists() {
    return(
        <BackgroundTexture texture='corkboard'>
            <View>

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