import React from "react";
import { View,Text,StyleSheet,TextInput,Button,FlatList,Pressable,Image} from 'react-native';


const WantPhotoA = ({navigation,route}) => {

    
    return(
        <View>
            <Text>Do you want to take a photo for team A?</Text>
            <Button title = "Take Team A Photo"  onPress ={() => {navigation.navigate('TakingPhotoA')} }/>
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