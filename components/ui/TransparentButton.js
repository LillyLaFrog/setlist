import { Pressable, StyleSheet, Text } from "react-native";

function TransparentButton({onPress, children, color}) {
    return(
        <Pressable style={({pressed})=>[styles.container, pressed && styles.pressed]} onPress={onPress}>
            <Text style={[{color:color},styles.text]}>{children}</Text>
        </Pressable>
    );
}

export default TransparentButton;

const styles = StyleSheet.create({
    container:{
        margin: 12,
    },
    pressed:{
        opacity: 0.5,
    },
    text: {
        fontSize: 14,
    },
});