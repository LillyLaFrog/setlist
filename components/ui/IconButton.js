import { Pressable, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function IconButton({ onPress, icon, size, color}) {
    return(
        <Pressable onPress={onPress}>
            <Ionicons name={icon} size={size} color={color} />
        </Pressable>
    );
};

export default IconButton;