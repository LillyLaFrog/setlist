import { StyleSheet, View } from "react-native";
import BackgroundTexture from "../../../components/ui/BackgroundTexture";

function SearchArtists() {
    return(
        <BackgroundTexture texture='corkboard'>
            <View>
            
            </View>
        </BackgroundTexture>
    );
}

export default SearchArtists;

const styles = StyleSheet.create({
    background:{
        flex:1,
    }
});