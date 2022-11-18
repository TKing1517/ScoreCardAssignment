import React, { useContext } from "react";
import { View,Image,StyleSheet,Text,Button } from "react-native";
import ItemContext from "../Contexts/ItemContext";

const TakenPicB =({navigation}) => {
    const {GetPhotoB} = useContext(ItemContext);

    return(
        <View style = {styles.container}>
            <Text>Here is the photo for team B.</Text>
            <Image style={styles.imageStyle} source={{uri:GetPhotoB()}}/>
            <Text>Press the button to continue</Text>
            <Button title="Continue" onPress ={() => {navigation.navigate('WhichTeamShot')} }/>
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
        aspectRatio:1,
        resizeMode: 'contain'
    }
})

export default TakenPicB;