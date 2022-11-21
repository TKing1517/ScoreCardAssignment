import React from "react";
import { View,Text,StyleSheet,TextInput,Button,FlatList,Pressable,Image} from 'react-native';


const WantPhotoA = ({navigation,route}) => {

    
    return(
        <View style={styles.container}>
            <Text style={styles.textstyle}>Do you want to take team photos?</Text>
            <Pressable style={styles.buttonStyle} onPress={() => {
                navigation.navigate('TakingPhotoA')
                }}>
                <Text style={styles.textstyle}>{"Take Team A Photo"}</Text>
            </Pressable>
            
            <Pressable style={styles.buttonStyle} onPress={() => {
                navigation.navigate('WhichTeamShot')
                }}>
                <Text style={styles.textstyle}>{"No photos"}</Text>
            </Pressable>
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

    buttonStyle:{
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#5693f5',
      marginBottom:15
    },
    
  
  });

export default WantPhotoA;