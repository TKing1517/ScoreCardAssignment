import React, { useContext } from "react";
import { View,Image,StyleSheet,Text,Button } from "react-native";
import ItemContext from "../Contexts/ItemContext";

const TakenPicB =({navigation}) => {
    const {GetPhotoB} = useContext(ItemContext);

    return(
        <View style = {styles.container}>
            <Text style={styles.textstyle}>Here is the photo for team B.</Text>
            <Image style={styles.imageStyle} source={{uri:GetPhotoB()}}/>
            <Text style={styles.textstyle}>Press the button to continue</Text>
            <Button title="Continue" onPress ={() => {navigation.navigate('WhichTeamShot')} }/>
        </View>   
    )
}



const styles = StyleSheet.create({
   container: {
        flex: 1,
        backgroundColor: '#ADD8E6',
        alignItems: 'center',

      },
      
      lesserContainer: {
        alignItems: 'center',
        justifyContent: 'center'
      },
    
      textstyle: {
        fontSize: 17,
        
      },

    imageStyle:{
        maxWidth:1000,
        maxHeight:1000,
        height: 450,
        aspectRatio:1,
        resizeMode: 'contain',

    }
})

export default TakenPicB;