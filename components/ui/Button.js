import { Pressable, StyleSheet, Text } from "react-native";

function Button({onPress, children, color}) {
    return(
        <Pressable style={({pressed})=>[styles.container, {backgroundColor: color}, pressed && styles.pressed]} onPress={onPress}>
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    );
}

export default Button;

const styles = StyleSheet.create({
    container:{
        margin: 12,
        backgroundColor:'skyblue',
        borderRadius: 8,
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