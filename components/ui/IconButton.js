import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function IconButton({ onPress, icon, size, color}) {
    return(
        <Pressable onPress={onPress} style={styles.container}>
            <Ionicons name={icon} size={size} color={color} />
        </Pressable>
    );
};

export default IconButton;

const styles = StyleSheet.create({
    container: {
        padding: 6,
    }
});