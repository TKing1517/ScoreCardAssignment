import React from "react";
import { View,Text,StyleSheet,TextInput,Button,FlatList,Pressable,Alert} from 'react-native';
import { useState, useContext } from "react";
import ItemContext from "../Contexts/ItemContext";

const EditGameDetails = ({navigation,route}) => {
    const {Id} = route.params;
    const{GameDetailsState,EditResults} = useContext(ItemContext);
    var validTotals = false;
    const currentEntry = GameDetailsState.find((e) => e.id===Id);
    const [competitonName, setcompetitionName] = useState(currentEntry.competitonName);
    const [rinkNumber, setRinkNumber] = useState(currentEntry.rinkNumber);
    const [teamNameA, setTeamNameA] = useState(currentEntry.teamNameA);
    const [teamNameB, setTeamNameB] = useState(currentEntry.teamNameB);
    const [NumberOfPlayers, setNumberOfPlayers] = useState(currentEntry.NumberOfPlayers);
    const [teamAtotal,setATotal] = useState(currentEntry.TeamATotal);
    const [teamBtotal,setBTotal] = useState(currentEntry.TeamBTotal);
    

    const onSubmit = () => {
        if (teamAtotal < 1 || teamBtotal < 1 || competitonName.trim().length < 1 || rinkNumber.trim().length < 1
        || teamNameA.trim().length < 1 || teamNameB.trim().length < 1 || NumberOfPlayers.trim().length < 1) {
            Alert.alert('Alert', 'Field(s) cannnot be blank');
            return;
        } else {
            validTotals = true; 
        }
        
    }

    return(
        <View>
            <Text style={styles.textLabel}>Competition Name:</Text>
            <TextInput style={styles.textInput} 
            placeholder="Type competition name here"
            value={competitonName}
            onChangeText={(text) => {setcompetitionName(text);}}
            multiline={false}
            numberOfLines={1}
            maxLength={20}
            />
        
        
            <Text style={styles.textLabel}>Rink Number:</Text>
            <TextInput style={styles.textInput} 
            placeholder="Type rink number here"
            keyboardType = 'numeric'
            value={rinkNumber}
            onChangeText={(text) => {setRinkNumber(text);}}
            multiline={false}
            numberOfLines={1}
            maxLength={10}
            />
            <Text style={styles.textLabel}>Team Name A:</Text>
            <TextInput style={styles.textInput} 
            placeholder="Type team name A here"
            value={teamNameA}
            onChangeText={(text) => {setTeamNameA(text);}}
            multiline={false}
            numberOfLines={1}
            maxLength={20}
            />

            <Text style={styles.textLabel}>Team Name B:</Text>
            <TextInput style={styles.textInput} 
            placeholder="Type team name B here"
            value={teamNameB}
            onChangeText={(text) => {setTeamNameB(text);}}
            multiline={false}
            numberOfLines={1}
            maxLength={20}
            />    

            <Text style={styles.textLabel}>Number of players in each team</Text>
            <TextInput style={styles.textInput} 
            keyboardType = 'numeric'
            placeholder="Type number here"
            value={NumberOfPlayers}
            onChangeText={(text) => {setNumberOfPlayers(text);}}
            multiline={false}
            numberOfLines={1}
            maxLength={1}
            />

            
            <Text style={styles.textLabel}>Input New Team A Total Here:</Text>
            <TextInput style={styles.textInput} 
            placeholder="Type here"
            value={teamAtotal}
            onChangeText={(text) => {setATotal(text);}}
            multiline={false}
            numberOfLines={1}
            maxLength={10}
            />
            <Text style={styles.textLabel}>Input New Team B Total Here</Text>
            <TextInput style={styles.textInput} 
            placeholder="Type here"
            value={teamBtotal}
            onChangeText={(text) => {setBTotal(text);}}
            multiline={false}
            numberOfLines={1}
            maxLength={30}
            />

            
            <Button title = "submit item" onPress ={() => {
                onSubmit()
                if (validTotals === true){
                    EditResults(currentEntry.id,competitonName,rinkNumber,teamNameA,NumberOfPlayers,teamNameB,teamAtotal,teamBtotal),navigation.pop();
                }
            }}
            />
        </View>
        
    )
};

const styles = StyleSheet.create({
 
})

export default EditGameDetails;