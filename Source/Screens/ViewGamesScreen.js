import React from "react";
import { View,Text,Button } from "react-native";
import ItemContext from "../Contexts/ItemContext";
import { useContext } from "react";

const ViewGamesScreen = ({navigation, route}) => {
    const {id, competitonName,date,rinkNumber,teamNameA,teamNameB} = route.params;
    const{state} = useContext(ItemContext);
    const currentEntry = state.find((e) => e.id===id);

    return(
        <View>
            <Text>ID: {id} </Text>
            <Text>competitonName: {currentEntry.competitonName} </Text>
            <Text>date: {currentEntry.date}</Text>
            <Text>rinkNumber: {currentEntry.rinkNumber} </Text>
            <Text>teamNameA: {currentEntry.teamNameA} </Text>
            <Text>teamNameB: {currentEntry.teamNameB} </Text>
        </View>
    );
};

export default ViewGamesScreen;