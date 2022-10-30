import { View,Text,StyleSheet,TextInput,Button,FlatList,Pressable} from 'react-native';
import NavigationButton from '../Components/NavigationButton';
import { useState, useContext } from "react";
import ItemContext from '../Contexts/ItemContext';

const GameDetails = ({navigation}) => {
    const {state,create} = useContext(ItemContext);
    const [competitonName, setcompetitionName] = useState("");
    const [rinkNumber, setRinkNumber] = useState("");
    const [date, setDate] = useState("");
    const [teamNameA, setTeamNameA] = useState("");
    const [teamNameB, setTeamNameB] = useState("");
  return (
    <View >
      <Text>Please input the details of the game below</Text>
      <Text style={styles.textLabel}>Competition Name:</Text>
            <TextInput style={styles.textInput} 
            placeholder="Type competition name here"
            value={competitonName}
            onChangeText={(text) => {setcompetitionName(text);}}
            multiline={false}
            numberOfLines={1}
            maxLength={10}
            />
        <Text style={styles.textLabel}>Date:</Text>
            <TextInput style={styles.textInput} 
            placeholder="Type date here."
            value={date}
            onChangeText={(text) => {setDate(text);}}
            multiline={false}
            numberOfLines={1}
            maxLength={10}
            />
        <Text style={styles.textLabel}>Rink Number:</Text>
            <TextInput style={styles.textInput} 
            placeholder="Type rink number here"
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
            maxLength={10}
            />
        <Text style={styles.textLabel}>Team Name B:</Text>
            <TextInput style={styles.textInput} 
            placeholder="Type team name B here"
            value={teamNameB}
            onChangeText={(text) => {setTeamNameB(text);}}
            multiline={false}
            numberOfLines={1}
            maxLength={10}
            />    
      <NavigationButton screenName="NumberOfPlayers" navigation={navigation}/>
      <Button title = "submit items" onPress ={() => {
               create(competitonName,date,rinkNumber,teamNameA,teamNameB, () => navigation.pop());
            }}
        />
        <FlatList
            data={state}
            keyExtractor={(e) => e.id.toString()}
            renderItem={({item}) => {
                return (
                    
                    <Pressable onPress={() => navigation.navigate('ViewGamesScreen',{
                        id: item.id,
                        competitonName: item.competitonName,
                        date: item.date,
                        rinkNumber: item.rinkNumber,
                        teamNameA: item.teamNameA,
                        teamNameB: item.teamNameB
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