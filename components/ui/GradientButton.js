import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleSheet, Text } from "react-native";

function GradientButton({onPress, children, startColor, endColor, textColor}) {
    return(
        <Pressable style={({pressed})=>[styles.container, pressed && styles.pressed]} onPress={onPress}>
            <LinearGradient colors={[startColor, endColor]}>
                <Text style={[styles.text, {color: textColor}]}>{children}</Text>
            </LinearGradient>
        </Pressable>
    );
}

export default GradientButton;

const styles = StyleSheet.create({
    container:{
        margin: 12,
        borderRadius: 8,
        overflow: 'hidden',
    },
    pressed:{
        opacity: 0.5,
    },
    text: {
        textAlign:'center',
        fontSize: 14,
        color: 'white',
        padding: 8,
    },
});