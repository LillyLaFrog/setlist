import { ImageBackground, StyleSheet, View } from "react-native";

function FollowedArtists() {
    return(
        <ImageBackground
        source={require('../../../images/background/corkboard.jpg')}
        style={styles.background}>
            <View>

            </View>
        </ImageBackground>
    );
}

export default FollowedArtists;

const styles = StyleSheet.create({
    background:{
        flex:1,
    }
});