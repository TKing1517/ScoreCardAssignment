import React from "react";
import { View,Text,Button,Image,StyleSheet } from "react-native";
import ItemContext from "../Contexts/ItemContext";
import { useContext } from "react";

const ViewGamesScreen = ({navigation, route}) => {
    const {id,date} = route.params;
    const{GameDetailsState} = useContext(ItemContext);
    const currentEntry = GameDetailsState.find((e) => e.id===id);

    let tempArrayOfScores = [];
    let scores;
    console.log(currentEntry.StoredPhotoA);
    console.log(currentEntry.StoredPhotoB);

    if (currentEntry.Scores != null){
        currentEntry.Scores.forEach(
        function(d){
            if (d.charAt(1) === "A"){
                scores = "Team A scored: " + d.charAt(0);
            } else {
                scores = "Team B scored: " + d.charAt(0);
            }
            tempArrayOfScores.push(scores);
        }
      )
    }
    
    return(
        <View style = {styles.container}>
            <Text style = {styles.textstyle}>ID of game: {id} </Text>
            <Text style = {styles.textstyle}>Competition name: {currentEntry.competitonName} </Text>
            <Text style = {styles.textstyle}>Date created: {currentEntry.date}</Text>
            <Text style = {styles.textstyle}>Rink number: {currentEntry.rinkNumber} </Text>
            <Text style = {styles.textstyle}>Number of players: {currentEntry.NumberOfPlayers}</Text>
            <Text style = {styles.textstyle}>Team A name: {currentEntry.teamNameA} </Text>
            {currentEntry.StoredPhotoA != null? <Image style={styles.imageStyle} source={{uri:currentEntry.StoredPhotoA}}/>: <Text>There is no photo.</Text> }
            <Text style = {styles.textstyle}>Team B name: {currentEntry.teamNameB} </Text>
            {currentEntry.StoredPhotoB != null? <Image style={styles.imageStyle} source={{uri:currentEntry.StoredPhotoB}}/>: <Text>There is no photo.</Text> }
            <Text style = {styles.textstyle}>Team A Player 1: {currentEntry.PlayerA1Name} </Text>
            {currentEntry.PlayerA2Name != ""? <Text style = {styles.textstyle}>Team A Player 2: {currentEntry.PlayerA2Name}</Text>: null }
            {currentEntry.PlayerA3Name != ""? <Text style = {styles.textstyle}>Team A Player 3: {currentEntry.PlayerA3Name}</Text>: null }
            {currentEntry.PlayerA4Name != ""? <Text style = {styles.textstyle}>Team A Player 4: {currentEntry.PlayerA4Name}</Text>: null }
            <Text style = {styles.textstyle}>Team B Player 1: {currentEntry.PlayerB1Name} </Text>
            {currentEntry.PlayerB2Name != ""? <Text style = {styles.textstyle}>Team B Player 2: {currentEntry.PlayerB2Name}</Text>: null }
            {currentEntry.PlayerB3Name != ""? <Text style = {styles.textstyle}>Team B Player 3: {currentEntry.PlayerB3Name}</Text>: null }
            {currentEntry.PlayerB4Name != ""? <Text style = {styles.textstyle}>Team B Player 4: {currentEntry.PlayerB4Name}</Text>: null }
            <Text style = {styles.textstyle}>Total score of Team A: {currentEntry.TeamATotal} </Text>
            <Text style = {styles.textstyle}>Total Score of Team B: {currentEntry.TeamBTotal} </Text>
            <Text style = {styles.textstyle}>Game Scores for each End: {tempArrayOfScores + ","} </Text>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ADD8E6',
      },

    imageStyle:{
        maxWidth:1000,
        maxHeight:1000,
        height: 100,
        aspectRatio:1, 

        //float: 'left',
    },

    textstyle: {
        fontSize: 15,
        marginBottom:2,
      },
})


export default ViewGamesScreen;