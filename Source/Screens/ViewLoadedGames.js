import React from "react";
import { View,Text,StyleSheet,TextInput,Button,FlatList,Pressable} from 'react-native';
import NavigationButton from "../Components/NavigationButton";
import { useState, useContext } from "react";
import ItemContext from "../Contexts/ItemContext";
import { MaterialIcons } from '@expo/vector-icons';

const ViewLoadedGames = ({navigation, route}) => {
    const {GameDetailsState,deleteDetails,ID} = useContext(ItemContext);
    return(
        <View>
        <FlatList
            data={GameDetailsState}
            keyExtractor={(e) => e.id.toString()}
            renderItem={({item}) => {
                return (
                    
                    <Pressable onPress={() => navigation.navigate('ViewGamesScreen',{
                        id: item.id,
                    })}>
                    <><Text>{item.id}</Text></>
                    <Pressable onPress={() => {deleteDetails(item.id)}}>
                        <MaterialIcons name="delete" size={38} color="red" />
                    </Pressable>
                    <Button title="Edit Item" onPress={() => {
                        navigation.navigate('EditGameDetails',{Id:item.id});
                    }} />
                    </Pressable>
                    
                    
                )
            }}
        />
        </View>
    );
};

export default ViewLoadedGames;