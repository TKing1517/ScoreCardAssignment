import React from "react";
import { View,Text,StyleSheet,TextInput,Button,FlatList,Pressable} from 'react-native';
import { useState, useContext } from "react";
import ItemContext from "../Contexts/ItemContext";

const GameEnd = ({navigation}) => {
    const {resetValues} = useContext(ItemContext);
    resetValues();
    return(
        <View>
            <Text>Game has ended.</Text>
            <Button 
            title={'Create new card?'}
            onPress={() => navigation.navigate('LandingPage')}
            />  
        </View>
    )
        
    
};

const styles = StyleSheet.create({
 
})

export default GameEnd;