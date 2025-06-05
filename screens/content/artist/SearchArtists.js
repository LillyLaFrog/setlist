import { ImageBackground, StyleSheet, View } from "react-native";

function SearchArtists() {
    return(
        <ImageBackground
        source={require('../../../images/background/corkboard.jpg')}
        style={styles.background}>
            <View>

            </View>
        </ImageBackground>
    );
}

export default SearchArtists;

const styles = StyleSheet.create({
    background:{
        flex:1,
    }
});