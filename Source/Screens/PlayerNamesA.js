import React from "react";
import { View,Text,StyleSheet,TextInput,Button,FlatList,Pressable,Alert } from "react-native";
import { useState, useContext } from "react";
import ItemContext from "../Contexts/ItemContext";
import NavigationButton from "../Components/NavigationButton";

const PlayerNamesA = ({navigation, route}) => {
    const {GameDetailsState,createTeamA,ID} = useContext(ItemContext);
    let CurrentEntry = GameDetailsState.find((e) => (e.id===ID));
    var validation = false;
    const [PlayerA1Name, setPlayerA1Name] = useState("");
    const [PlayerA2Name, setPlayerA2Name] = useState("");
    const [PlayerA3Name, setPlayerA3Name] = useState("");
    const [PlayerA4Name, setPlayerA4Name] = useState("");

    const onSubmit = () => {
        if (PlayerA1Name.trim().length < 1 || parseInt(CurrentEntry.NumberOfPlayers) >= 2 && PlayerA2Name.trim().length < 1
        || parseInt(CurrentEntry.NumberOfPlayers) >= 3 && PlayerA3Name.trim().length < 1 || parseInt(CurrentEntry.NumberOfPlayers) >= 4 && PlayerA4Name.trim().length < 1)
        {
            Alert.alert('Alert', 'All fields must be filled.');
            return;
        } else {
            
            validation = true;  
            
        }
        
    }

    return(
        <View style={styles.container}>
            
            <Text style={styles.textLabel}>Player 1 Of Team A</Text>
                <TextInput style={styles.textInput} 
                placeholder="Type player name here"
                value={PlayerA1Name}
                onChangeText={(text) => {setPlayerA1Name(text);}}
                multiline={false}
                numberOfLines={1}
                maxLength={20}
            />
            {parseInt(CurrentEntry.NumberOfPlayers) >= 2? <Text style={styles.textLabel}>Player 2 Of Team A</Text>: null }
            {parseInt(CurrentEntry.NumberOfPlayers) >= 2? <TextInput style={styles.textInput} 
                                                                placeholder="Type player name here"
                                                                value={PlayerA2Name}
                                                                onChangeText={(text) => {setPlayerA2Name(text);}}
                                                                multiline={false}
                                                                numberOfLines={1}
                                                                maxLength={20}
                                                                />: null }

            {parseInt(CurrentEntry.NumberOfPlayers) >= 3? <Text style={styles.textLabel}>Player 3 Of Team A</Text>: null }
            {parseInt(CurrentEntry.NumberOfPlayers) >= 3? <TextInput style={styles.textInput} 
                                                                placeholder="Type player name here"
                                                                value={PlayerA3Name}
                                                                onChangeText={(text) => {setPlayerA3Name(text);}}
                                                                multiline={false}
                                                                numberOfLines={1}
                                                                maxLength={20}
                                                                />: null }
            
            {parseInt(CurrentEntry.NumberOfPlayers) >= 4? <Text style={styles.textLabel}>Player 4 Of Team A</Text>: null }
            {parseInt(CurrentEntry.NumberOfPlayers) >= 4? <TextInput style={styles.textInput} 
                                                                placeholder="Type player name here"
                                                                value={PlayerA4Name}
                                                                onChangeText={(text) => {setPlayerA4Name(text);}}
                                                                multiline={false}
                                                                numberOfLines={1}
                                                                maxLength={20}
                                                                />: null }

 
            <Button title = "submit items" onPress ={() => {
                onSubmit()
                if (validation === true ){
                    createTeamA(ID,PlayerA1Name,PlayerA2Name,PlayerA3Name,PlayerA4Name), navigation.navigate('PlayerNamesB');
                }
            }}
            />
        </View>
    );
};

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

export default PlayerNamesA;