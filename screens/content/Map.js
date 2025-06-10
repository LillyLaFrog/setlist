import { useCallback, useLayoutEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import IconButton from '../../components/ui/IconButton';
import Button from '../../components/ui/Button';
import { Colors } from '../../constants/Colors';

function Map({navigation, route}) {


    const location = !!route.params && {
        lat: route.params.lat,
        lng: route.params.lng
    }

    const [markerLocation, setMarkerLocation] = useState(location);

    const region = {
        latitude: (!!location)?location.lat:0,
        longitude: (!!location)?location.lng:0,
        latitudeDelta: 0.0047,
        longitudeDelta: 0.0028
    };
    console.log(region)

    function setLocationHandler(event) {
        if(!location){
            const lat = event.nativeEvent.coordinate.latitude;
            const lng = event.nativeEvent.coordinate.longitude;
            setMarkerLocation({lat: lat, lng: lng});
        }
    }

    const savePickedLocationHandler = useCallback(() => {
        if(!markerLocation){
            Alert.alert('No location set!', 'You need to select a location first. (Tap the map where you want to add it!)');
            return;
        }

        navigation.popTo('AddPlace', { pickedLocation: markerLocation });
    }, [navigation, markerLocation])
    
    useLayoutEffect(()=>{
        if(!location){
            navigation.setOptions({
            headerRight: ({tintColor}) => <IconButton icon='save' size={24} color={tintColor} onPress={savePickedLocationHandler} />
        });
        }

    },[navigation, savePickedLocationHandler, location])

    return(
        <View style={styles.container}>
        <MapView style={styles.map} initialRegion={region} onPress={setLocationHandler}>
            {!!markerLocation && <Marker title='Picked Location' coordinate={{latitude: markerLocation.lat, longitude: markerLocation.lng}} />}
        </MapView>
        <Button onPress={navigation.goBack} color={Colors.coolB700}>Back</Button>
        </View>
    );
}

export default Map;

const styles = StyleSheet.create({
    map:{
        flex: 1,
    },
    container:{
        flex:1,
    },
});