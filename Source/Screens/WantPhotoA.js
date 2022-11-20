import React from "react";
import { View,Text,StyleSheet,TextInput,Button,FlatList,Pressable,Image} from 'react-native';


const WantPhotoA = ({navigation,route}) => {

    
    return(
        <View style={styles.container}>
            <Text style={styles.textstyle}>Do you want to take team photos?</Text>
            <Button title = "Take Team A Photo"  onPress ={() => {navigation.navigate('TakingPhotoA')} }/>
            <Button title = "No photos" onPress={() => {navigation.navigate('WhichTeamShot')}}/>
        </View>
        
    )
        
    
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ADD8E6',
      alignItems: 'center',
      justifyContent: 'center'
    },
    
    lesserContainer: {
      borderWidth: 10,
      borderColor: 'black',
      borderRadius: 4,
      padding: 5,
      marginVertical: 5
    },
  
    textstyle: {
      fontSize: 15,
      fontWeight: 'bold',
  
    },
    
  
  });

export default WantPhotoA;