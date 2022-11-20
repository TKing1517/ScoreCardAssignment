import React from "react";
import { View,Text,StyleSheet,TextInput,Button,FlatList,Pressable} from 'react-native';
import { useState, useContext } from "react";
import ItemContext from "../Contexts/ItemContext";

const GameEnd = ({navigation}) => {
    const {resetValues} = useContext(ItemContext);
    resetValues();
    return(
        <View style = {styles.container}>
            <Text style = {styles.textstyle}>Game has ended.</Text>
            <Button 
            title={'Create new card?'}
            onPress={() => navigation.navigate('LandingPage')}
            />  
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
})

export default GameEnd;