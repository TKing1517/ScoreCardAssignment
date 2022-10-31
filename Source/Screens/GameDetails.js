import { View,Text,StyleSheet,TextInput,Button,FlatList,Pressable} from 'react-native';
import NavigationButton from '../Components/NavigationButton';
import { useState, useContext } from "react";

import ItemContext from '../Contexts/ItemContext';

const GameDetails = ({navigation}) => {
    const {GameDetailsState,create} = useContext(ItemContext);

    const [competitonName, setcompetitionName] = useState("");
    const [rinkNumber, setRinkNumber] = useState("");
    const [date, setDate] = useState("");
    const [teamNameA, setTeamNameA] = useState("");
    const [NumberOfPlayersA, setNumberOfPlayersA] = useState("");
    const [teamNameB, setTeamNameB] = useState("");
    const [NumberOfPlayersB, setNumberOfPlayersB] = useState("");
  return (
    <View >
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
        <Text style={styles.textLabel}>Number of players in team A:</Text>
            <TextInput style={styles.textInput} 
            keyboardType = 'numeric'
            placeholder="Type number here"
            value={NumberOfPlayersA}
            onChangeText={(text) => {setNumberOfPlayersA(text);}}
            multiline={false}
            numberOfLines={1}
            maxLength={1}
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
        <Text style={styles.textLabel}>Number of players in team B:</Text>
            <TextInput style={styles.textInput} 
            keyboardType = 'numeric'
            placeholder="Type number here"
            value={NumberOfPlayersB}
            onChangeText={(text) => {setNumberOfPlayersB(text);}}
            multiline={false}
            numberOfLines={1}
            maxLength={1}
            /> 
        <NavigationButton screenName="PlayerNamesA" navigation={navigation}/>         
        <Button title = "submit items" onPress ={() => {
               create(competitonName,date,rinkNumber,teamNameA,NumberOfPlayersA,teamNameB,NumberOfPlayersB, () => navigation.navigate('PlayerNamesA'));
            }}
        />
        
        <FlatList
            data={GameDetailsState}
            keyExtractor={(e) => e.id.toString()}
            renderItem={({item}) => {
                return (
                    
                    <Pressable onPress={() => navigation.navigate('ViewGamesScreen',{
                        id: item.id,
                        competitonName: item.competitonName,
                        date: item.date.toUTCString(),
                        rinkNumber: item.rinkNumber,
                        teamNameA: item.teamNameA,
                        NumberOfPlayersA: item.NumberOfPlayersA,
                        teamNameB: item.teamNameB,
                        NumberOfPlayersB: item.NumberOfPlayersB
                    })}>
                    <><Text>{item.id}</Text></>
                    </Pressable>
                )
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

    },

    textLabel:{
        fontSize:18,
        paddingLeft:10,
        marginTop:10,
    },
})

export default GameDetails;