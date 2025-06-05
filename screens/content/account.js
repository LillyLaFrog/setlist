import { View, Image, StyleSheet } from "react-native";
import BackgroundTexture from "../../components/ui/BackgroundTexture";
import Button from "../../components/ui/Button";
import { Colors } from "../../constants/Colors";
import { useContext } from "react";
import { authContext } from "../../store/auth-context";

function Account(){
    const authCtx = useContext(authContext);

    function logoutHandler() {
        authCtx.logout();
    }
    
    return(
        <BackgroundTexture texture='metal'>
            <View style={styles.container}>
                <Image 
                source={require('../../images/defaultPFP.png')}
                style={styles.profilePic} 
                />
                <Button onPress={()=>{}} color={Colors.coolB600}>Change Profile Picture</Button>
                <Button onPress={()=>{}} color={Colors.warmA400}>Change Password</Button>
                <Button onPress={logoutHandler} color={Colors.warmB700}>Logout</Button>
            </View>
        </BackgroundTexture>
    );
}

export default Account;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
    },
    profilePic:{
        width: 200,
        height: 200,
        margin: 12,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: 'black',
        elevation: 12
    }
});