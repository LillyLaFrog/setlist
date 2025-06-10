import { StyleSheet, View } from "react-native";

import BackgroundTexture from "../../../components/ui/BackgroundTexture";
import { Artist } from "../../../models/Artist";
import ListArtists from "../../../components/ui/lists/ListArtists";
import { useContext, useEffect } from "react";
import { userContext } from "../../../store/user-context";
import { addUserData } from "../../../util/database";
import { authContext } from "../../../store/auth-context";
import ImageButton from "../../../components/ui/imgButton";


function FollowedArtists({navigation}) {



    const imageURI = 'http://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeu-4mZFfjrNIr9K05_D3AgfZeem9HFMf3u_QLYnxTSqrbO30lb57h02AJsDtt9NHrDrA3-Z8gvtltAvvejodxdA'
    const artist = new Artist('AJR', imageURI, 2308877)

    const authCtx = useContext(authContext);

    const userCtx = useContext(userContext);

    useEffect(()=>{
        userCtx.sync(authCtx.token)
    },[]);

    useEffect(()=>{
        navigation.setOptions({
            headerLeft: ({tintColor})=>{
                return(
                  <ImageButton source={!!userCtx.profilePic? {uri:userCtx.profilePic}:require('../../../images/defaultPFP.png')} onPress={()=>navigation.navigate('Account')} color={tintColor} size={32} /> //todo make this the pfp
                );
              },
        });
    },[userCtx])
    
    return(
        <BackgroundTexture texture='corkboard'>
            <View style={styles.container}>
                <ListArtists artists={userCtx.favorites} />
            </View>
        </BackgroundTexture>
    );
}

export default FollowedArtists;

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        flex: 1,
    }
});