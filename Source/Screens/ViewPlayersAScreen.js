import React from "react";
import { View,Text,Button } from "react-native";
import ItemContext from "../Contexts/ItemContext";
import { useContext } from "react";

const ViewPlayersAScreen = ({navigation}) => {

    const{GameDetailsState,ID} = useContext(ItemContext);
    console.log(GameDetailsState);
    const currentEntry = GameDetailsState.find((e) => e.id===ID);

    return(
        <View>
            <Text>ID: {ID} </Text>
            <Text>PlayerA1Name: {currentEntry.PlayerA1Name} </Text>
            <Text>PlayerA2Name: {currentEntry.PlayerA2Name} </Text>
            <Text>PlayerA3Name: {currentEntry.PlayerA3Name} </Text>
            <Text>PlayerA4Name: {currentEntry.PlayerA4Name}</Text>
        </View>
    );
};

export default ViewPlayersAScreen;