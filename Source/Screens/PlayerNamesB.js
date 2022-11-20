import React from "react";
import { View,Text,StyleSheet,TextInput,Button,FlatList,Pressable,Alert } from "react-native";
import { useState, useContext } from "react";
import ItemContext from "../Contexts/ItemContext";
import NavigationButton from "../Components/NavigationButton";

const PlayerNamesB = ({navigation, route}) => {
    const {GameDetailsState,createTeamB,ID} = useContext(ItemContext);
    let CurrentEntry = GameDetailsState.find((e) => (e.id===ID));
    var validation = false;

    const [PlayerB1Name, setPlayerB1Name] = useState("");
    const [PlayerB2Name, setPlayerB2Name] = useState("");
    const [PlayerB3Name, setPlayerB3Name] = useState("");
    const [PlayerB4Name, setPlayerB4Name] = useState("");

    const onSubmit = () => {
        if (PlayerB1Name.trim().length < 1 || parseInt(CurrentEntry.NumberOfPlayers) >= 2 && PlayerB2Name.trim().length < 1
        || parseInt(CurrentEntry.NumberOfPlayers) >= 3 && PlayerB3Name.trim().length < 1 || parseInt(CurrentEntry.NumberOfPlayers) >= 4 && PlayerB4Name.trim().length < 1)
        {
            Alert.alert('Alert', 'All fields must be filled.');
            return;
        } else {
            
            validation = true;  
            
        }
        
    }

    return(
        <View style={styles.container}>
            <Text style={styles.textLabel}>Player 1 Of Team B</Text>
                <TextInput style={styles.textInput} 
                placeholder="Type player name here"
                value={PlayerB1Name}
                onChangeText={(text) => {setPlayerB1Name(text);}}
                multiline={false}
                numberOfLines={1}
                maxLength={20}
            />
            {parseInt(CurrentEntry.NumberOfPlayers) >= 2? <Text style={styles.textLabel}>Player 2 Of Team B</Text>: null }
            {parseInt(CurrentEntry.NumberOfPlayers) >= 2? <TextInput style={styles.textInput} 
                                                                placeholder="Type player name here"
                                                                value={PlayerB2Name}
                                                                onChangeText={(text) => {setPlayerB2Name(text);}}
                                                                multiline={false}
                                                                numberOfLines={1}
                                                                maxLength={20}
                                                                />: null }

            {parseInt(CurrentEntry.NumberOfPlayers) >= 3? <Text style={styles.textLabel}>Player 3 Of Team B</Text>: null }
            {parseInt(CurrentEntry.NumberOfPlayers) >= 3? <TextInput style={styles.textInput} 
                                                                placeholder="Type player name here"
                                                                value={PlayerB3Name}
                                                                onChangeText={(text) => {setPlayerB3Name(text);}}
                                                                multiline={false}
                                                                numberOfLines={1}
                                                                maxLength={20}
                                                                />: null }

            {parseInt(CurrentEntry.NumberOfPlayers) >= 4? <Text style={styles.textLabel}>Player 4 Of Team B</Text>: null }
            {parseInt(CurrentEntry.NumberOfPlayers) >= 4? <TextInput style={styles.textInput} 
                                                                placeholder="Type player name here"
                                                                value={PlayerB4Name}
                                                                onChangeText={(text) => {setPlayerB4Name(text);}}
                                                                multiline={false}
                                                                numberOfLines={1}
                                                                maxLength={20}
                                                                />: null }

            <Button title = "submit items" onPress ={() => {
                onSubmit()
                if (validation === true ){
                    createTeamB(ID,PlayerB1Name,PlayerB2Name,PlayerB3Name,PlayerB4Name),navigation.navigate('WantPhotoA');
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

export default PlayerNamesB;