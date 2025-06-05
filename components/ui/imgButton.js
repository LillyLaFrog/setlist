import { Pressable, StyleSheet, Image } from "react-native";

function ImageButton({ onPress, source, size}) {
    return(
        <Pressable onPress={onPress} style={styles.container}>
            <Image source={source} style={{width:size, height:size, borderRadius:(size/2)}} />
        </Pressable>
    );
};

export default ImageButton;

const styles = StyleSheet.create({
    container: {
        padding: 6,
    }
});