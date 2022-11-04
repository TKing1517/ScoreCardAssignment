import React from "react";
import { View,Text,Button } from "react-native";
import ItemContext from "../Contexts/ItemContext";
import { useContext } from "react";

const ViewPlayersBScreen = ({navigation, route}) => {

    const{GameDetailsState,ID} = useContext(ItemContext);
    console.log(GameDetailsState);
    const currentEntry = GameDetailsState.find((e) => e.id===ID);

    return(
        <View>
            <Text>ID: {ID} </Text>
            <Text>PlayerB1Name: {currentEntry.PlayerB1Name} </Text>
            <Text>PlayerB2Name: {currentEntry.PlayerB2Name} </Text>
            <Text>PlayerB3Name: {currentEntry.PlayerB3Name} </Text>
            <Text>PlayerB4Name: {currentEntry.PlayerB4Name}</Text>
        </View>
    );
};

export default ViewPlayersBScreen;