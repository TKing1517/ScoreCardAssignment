import { Alert,View,Text,StyleSheet,TextInput,Button,FlatList,Pressable} from 'react-native';
import NavigationButton from '../Components/NavigationButton';
import { useState, useContext } from "react";

import ItemContext from '../Contexts/ItemContext';

const GameDetails = ({navigation}) => {
    const {GameDetailsState,create} = useContext(ItemContext);

    const [competitonName, setcompetitionName] = useState("");
    const [rinkNumber, setRinkNumber] = useState(0);
    const [date, setDate] = useState("");
    const [teamNameA, setTeamNameA] = useState("");
    const [NumberOfPlayers, setNumberOfPlayers] = useState(0);
    const [teamNameB, setTeamNameB] = useState("");
    var compLengthValid = false;

    const onSubmit = () => {
        if (competitonName.trim().length < 1 || parseInt(rinkNumber) < 1 || parseInt(rinkNumber) > 999 || teamNameA.trim().length < 1 ||
        parseInt(NumberOfPlayers) < 1 || parseInt(NumberOfPlayers) > 4 || teamNameB.trim().length < 1 || rinkNumber.toString().trim().length < 1 
        || NumberOfPlayers.toString().trim().length < 1) {
            Alert.alert('Alert', 'All fields must be filled. Hint: Rink Number cannot be greater than 999, Number of players '
            + 'must be between 1 and 4. ');
            return;
        } else {
           compLengthValid = true; 
        }
        
    }


  return (
    <View style={styles.container}>
      <Text style={styles.textLabel}>Competition Name:</Text>
            <TextInput style={styles.textInput} 
            placeholder="Type competition name here"
            value={competitonName}
            autoCorrect={false}
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
            autoCorrect={false}
            onChangeText={(text) => {setTeamNameA(text);}}
            multiline={false}
            numberOfLines={1}
            maxLength={20}
            />

        <Text style={styles.textLabel}>Team Name B:</Text>
            <TextInput style={styles.textInput} 
            placeholder="Type team name B here"
            value={teamNameB}
            autoCorrect={false}
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

         
        <Button title = "submit items" onPress ={() => {
            onSubmit()
            if (compLengthValid === true ){
                create(competitonName,date,rinkNumber,teamNameA,NumberOfPlayers,teamNameB), navigation.navigate('PlayerNamesA');
            }
            
        }}
        />
        
    </View>
  );
}

const styles = StyleSheet.create({
    textInput:{ 
        fontSize:20,
        padding:10,
        margin: 5,
        borderWidth:1,
        backgroundColor: 'white',
    },

    textLabel:{
        fontSize:18,
        paddingLeft:10,
        marginTop:10,

    },

    container: {
        flex: 1,
        backgroundColor: '#ADD8E6',
      },
})

export default GameDetails;