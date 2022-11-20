import React from "react";
import { View,Text,StyleSheet,TextInput,Button,FlatList,Pressable} from 'react-native';
import NavigationButton from "../Components/NavigationButton";
import { useState, useContext } from "react";
import ItemContext from "../Contexts/ItemContext";
import { MaterialIcons } from '@expo/vector-icons';

const ViewLoadedGames = ({navigation, route}) => {
    const {GameDetailsState,deleteDetails,ID} = useContext(ItemContext);
    return(
        <View style = {styles.container}>
        <FlatList
            data={GameDetailsState}
            keyExtractor={(e) => e.id.toString()}
            renderItem={({item}) => {
                return (
                    
                    <Pressable style = {styles.box} onPress={() => navigation.navigate('ViewGamesScreen',{
                        id: item.id,
                    })}>
                    <><Text style = {styles.buttonStyle}>Press here to view details of score card: {item.competitonName}</Text></>
                    <Pressable style = {styles.buttonStyleRed} onPress={() => {deleteDetails(item.id)}}>
                        <Text>Press here to delete card</Text>
                    </Pressable>
                    <Pressable style={styles.buttonStyle} onPress={() => {
                       navigation.navigate('EditGameDetails',{Id:item.id});
                    }}>
                        <Text>Edit Item</Text>
                    </Pressable>
                    </Pressable>
                    
                    
                )
            }}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ADD8E6',
  
    },
    
    lesserContainer: {
      borderWidth: 10,
      borderColor: 'black',
      borderRadius: 4,
      padding: 5,
      marginVertical: 5
    },
  
    textstyleCap: {
      fontSize: 24,
    },
  
    textstylelesser: {
      fontSize: 20,
    },
  
    textstyle: {
      marginTop:2,
      marginBottom:5,
      fontSize: 16,
      textAlign:'center'
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
  
    buttonStyleRed:{
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#de3d23',
      marginBottom:15
    },
    
    box:{
        marginTop:1,
        borderColor:'black',
        borderWidth:3,
      },
  })

export default ViewLoadedGames;