import React from "react";
import { View,Text,StyleSheet,TextInput,Button,FlatList,Pressable,Image} from 'react-native';


const WantPhotoA = ({navigation,route}) => {

    
    return(
        <View>
            <Text>Do you want to take team Photos?</Text>
            <Button title = "Take Team A Photo"  onPress ={() => {navigation.navigate('TakingPhotoA')} }/>
            <Button title = "No photos" onPress={() => {navigation.navigate('WhichTeamShot')}}/>
        </View>
        
    )
        
    
};

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    imageStyle:{
        flex:1,
        alignSelf:"stretch",
        width: 100, 
        height: 100
    }
})

export default WantPhotoA;