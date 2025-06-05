import { ImageBackground, Dimensions, StyleSheet } from "react-native";

function BackgroundTexture({texture, children, keepHeight}){
    //keepHeight uses screen dimentions instead of flex 1 for height to prevent the texture from squishing when using keyboard

    const textures = {
        metal: require('../../images/background/metal.jpg'),
        corkboard: require('../../images/background/corkboard.jpg'),
        stars: require('../../images/background/stars.jpg'),
        wood: require('../../images/background/wood.jpg'),
    }

    const screenHeight = Dimensions.get('screen').height;

    return(
        <ImageBackground
        source={textures[texture]}
        style={[styles.background, keepHeight && {height: screenHeight}]}
        >
            {children}
        </ImageBackground>
    );
}

export default BackgroundTexture;

const styles = StyleSheet.create({
    background: {
        flex: 1,
    }
});