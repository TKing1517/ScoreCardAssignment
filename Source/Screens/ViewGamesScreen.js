import React from "react";
import { View,Text,Button } from "react-native";
import ItemContext from "../Contexts/ItemContext";
import { useContext } from "react";

const ViewGamesScreen = ({navigation, route}) => {
    const {id,date} = route.params;
    const{GameDetailsState} = useContext(ItemContext);
    const currentEntry = GameDetailsState.find((e) => e.id===id);

    return(
        <View>
            <Text>ID: {id} </Text>
            <Text>competitonName: {currentEntry.competitonName} </Text>
            <Text>date: {currentEntry.date}</Text>
            <Text>rinkNumber: {currentEntry.rinkNumber} </Text>
            <Text>teamNameA: {currentEntry.teamNameA} </Text>
            <Text>NumberOfPlayersA: {currentEntry.NumberOfPlayersA}</Text>
            <Text>teamNameB: {currentEntry.teamNameB} </Text>
            <Text>NumberOfPlayersB: {currentEntry.NumberOfPlayersB} </Text>
            <Text>PlayerA1Name: {currentEntry.PlayerA1Name} </Text>
            <Text>PlayerA2Name: {currentEntry.PlayerA2Name} </Text>
            <Text>PlayerA3Name: {currentEntry.PlayerA3Name}</Text>
            <Text>PlayerA4Name: {currentEntry.PlayerA4Name} </Text>
            <Text>PlayerB1Name: {currentEntry.PlayerB1Name} </Text>
            <Text>PlayerB2Name: {currentEntry.PlayerB2Name} </Text>
            <Text>PlayerB3Name: {currentEntry.PlayerB3Name} </Text>
            <Text>PlayerB4Name: {currentEntry.PlayerB4Name} </Text>
            <Text>TeamATotal: {currentEntry.TeamATotal} </Text>
            <Text>TeamBTotal: {currentEntry.TeamBTotal} </Text>
            <Text>Game Scores: {currentEntry.Scores} </Text>

        </View>
    );
};

export default ViewGamesScreen;