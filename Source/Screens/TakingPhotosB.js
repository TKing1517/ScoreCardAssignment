import React from "react";
import { View,Text,StyleSheet,TextInput,Button,FlatList,Pressable} from 'react-native';
import { useState, useContext,useEffect } from "react";
import ItemContext from "../Contexts/ItemContext";
import { Camera } from "expo-camera";

const TakingPhotoB = ({navigation}) => {
    const {NewPhotoB} = useContext(ItemContext);
    const [hasPermission, setHasPermission] = useState(null);
    const getPermission = async () => {
        const {status} = await Camera.requestCameraPermissionsAsync()
        setHasPermission(status === 'granted');
    };
    let camera;
    const getPicture = async () => {
    if (camera){
        const photo = await camera.takePictureAsync();
  
        NewPhotoB(photo.uri)
        navigation.navigate('TakenPicB');
    }
}

    useEffect(() => {
        getPermission();
    },[]);
    if (hasPermission === null){
        return <Text>Awaiting Permission</Text>
    }
    if (hasPermission === false) {
        return <Text>Access Denied! Ideally there would be a way to handle this...But if you are seeing this message, I forgot to implement it.</Text>
    } 
    
    return (
        <View style={styles.container}>
            <Camera style={styles.subContainer} ref={(ref) => { camera = ref}}>
                <Pressable style={styles.buttonStyle} onPress={() => {
                    getPicture();
                }}>
                    <Text style={styles.textStyle}>Press Here To Take Picture!</Text>
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
        alignItems:"center",
    },
    textStyle:{
        fontSize:20,
        marginBottom: 30,
        color: "yellow",
    }
})

export default TakingPhotoB;