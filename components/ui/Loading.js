import { ActivityIndicator, StyleSheet, View } from "react-native";

function Loading({color}) {
    return(
        <View style={styles.screen}>
            <ActivityIndicator size="large" color={color}/>
        </View>
    );
}

export default Loading;

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center'
    }
});