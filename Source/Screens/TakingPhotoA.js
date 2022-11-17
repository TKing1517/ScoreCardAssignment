import React from "react";
import { View,Text,StyleSheet,TextInput,Button,FlatList,Pressable} from 'react-native';
import { useState, useContext,useEffect } from "react";
import ItemContext from "../Contexts/ItemContext";
import { Camera } from "expo-camera";

const TakingPhotoA = ({navigation}) => {
    const {NewPhotoA} = useContext(ItemContext);
    const [hasPermission, setHasPermission] = useState(null);
    const getPermission = async () => {
        const {status} = await Camera.requestCameraPermissionsAsync()
        setHasPermission(status === 'granted');
    };
    let camera;
    const getPicture = async () => {
    if (camera){
        const photo = await camera.takePictureAsync();
  
        NewPhotoA(photo.uri)
        navigation.navigate('TakenPicA');
    }
}

    useEffect(() => {
        getPermission();
    },[]);
    if (hasPermission === null){
        return <Text>Awaiting Permission</Text>
    }
    if (hasPermission === false) {
        return <Text>Access Denied!</Text>
    } 
    
    return (
        <View style={styles.container}>
            <Camera style={styles.subContainer} ref={(ref) => { camera = ref}}>
                <Pressable style={styles.buttonStyle} onPress={() => {
                    getPicture();
                }}>
                    <Text style={styles.textStyle}>Take Picture!</Text>
                </Pressable>
            </Camera>
        </View>
    )   
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    subContainer: {
        flex: 1,
        backgroundColor: "transparent",
        flexDirection: "row-reverse",
        alignItems: "flex-end"
    },
    buttonStyle:{
        flex:0.1,
        alignItems:"center",
    },
    textStyle:{
        fontSize:15,
        marginBottom: 15,
        color: "yellow",
    }
})

export default TakingPhotoA;