import { View, Image, StyleSheet, Alert } from "react-native";
import BackgroundTexture from "../../components/ui/BackgroundTexture";
import Button from "../../components/ui/Button";
import { Colors } from "../../constants/Colors";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../store/auth-context";
import { userContext } from "../../store/user-context";
import * as ImagePicker from 'expo-image-picker';

function Account(){
    const authCtx = useContext(authContext);
    const userCtx = useContext(userContext);
    const [cameraPermissionStatus, requestCameraPermission] = ImagePicker.useCameraPermissions();

    const [image, setImage] = useState();

    function logoutHandler() {
        authCtx.logout();
    }

    const pickImageHandler = async()=>{
        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [1,1]
        });
        if(!result.canceled){
            setImage(result.assets[0].uri);
            userCtx.setProfilePic(result.assets[0].uri, authCtx.token);
        }
    }

    const takeImageHandler = async()=>{
        if(cameraPermissionStatus.status == 'undetermined' || !cameraPermissionStatus.granted){
            requestCameraPermission();
        }
        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [1,1]
        });
        if(!result.canceled){
            setImage(result.assets[0].uri);
            userCtx.setProfilePic(result.assets[0].uri, authCtx.token);
        }
    }
    
    return(
        <BackgroundTexture texture='metal'>
            <View style={styles.container}>
                <Image 
                source={!!userCtx.profilePic? {uri:userCtx.profilePic}:require('../../images/defaultPFP.png')}
                style={styles.profilePic} 
                />
                <Button onPress={pickImageHandler} color={Colors.coolB600}>Pick Profile Picture</Button>
                <Button onPress={takeImageHandler} color={Colors.warmA400}>Take new Profile Picture</Button>
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