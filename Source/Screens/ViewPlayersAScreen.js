import React from "react";
import { View,Text,Button } from "react-native";
import ItemContext from "../Contexts/ItemContext";
import { useContext } from "react";

const ViewPlayersAScreen = ({navigation, route}) => {
    const {id, PlayerA1Name,PlayerA2Name,PlayerA3Name,PlayerA4Name} = route.params;
    const{PlayersAState} = useContext(ItemContext);
    const currentEntry = PlayersAState.find((e) => e.id===id);

    return(
        <View>
            <Text>ID: {id} </Text>
            <Text>PlayerA1Name: {currentEntry.PlayerA1Name} </Text>
            <Text>PlayerA2Name: {currentEntry.PlayerA2Name} </Text>
            <Text>PlayerA3Name: {currentEntry.PlayerA3Name} </Text>
            <Text>PlayerA4Name: {currentEntry.PlayerA4Name}</Text>
        </View>
    );
};

export default ViewPlayersAScreen;