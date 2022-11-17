import React, { useContext } from "react";
import { View,Image,StyleSheet,Text,Button } from "react-native";
import ItemContext from "../Contexts/ItemContext";

const TakenPicA =({navigation}) => {
    const {GetPhotoA} = useContext(ItemContext);

    return(
        <View style = {styles.container}>
            <Text>Here is the photo for team A.</Text>
            <Image style={styles.imageStyle} source={{uri:GetPhotoA()}}/>
            <Text>Would you like to a take a photo for team B?</Text>
            <Button title = "Take Team B Photo"  onPress ={() => {navigation.navigate('TakingPhotoB')} }/>
        </View>   
    )
}



const styles = StyleSheet.create({
    container:{
        flex:1
    },
    imageStyle:{
        maxWidth:1000,
        maxHeight:1000,
        height: 550, 
        resizeMode: 'contain'
    }
})

export default TakenPicA;