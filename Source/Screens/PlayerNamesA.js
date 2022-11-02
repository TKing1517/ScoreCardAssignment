import React from "react";
import { View,Text,StyleSheet,TextInput,Button,FlatList,Pressable } from "react-native";
import { useState, useContext } from "react";
import ItemContext from "../Contexts/ItemContext";
import NavigationButton from "../Components/NavigationButton";

const PlayerNamesA = ({navigation, route}) => {
    const {PlayersAState,createTeamA} = useContext(ItemContext);

    const [PlayerA1Name, setPlayerA1Name] = useState("");
    const [PlayerA2Name, setPlayerA2Name] = useState("");
    const [PlayerA3Name, setPlayerA3Name] = useState("");
    const [PlayerA4Name, setPlayerA4Name] = useState("");
    return(
        <View>
            <Text style={styles.textLabel}>Player 1 Of Team A</Text>
                <TextInput style={styles.textInput} 
                placeholder="Type player name here"
                value={PlayerA1Name}
                onChangeText={(text) => {setPlayerA1Name(text);}}
                multiline={false}
                numberOfLines={1}
                maxLength={20}
            />
            <Text style={styles.textLabel}>Player 2 Of Team A</Text>
                <TextInput style={styles.textInput} 
                placeholder="Type player name here"
                value={PlayerA2Name}
                onChangeText={(text) => {setPlayerA2Name(text);}}
                multiline={false}
                numberOfLines={1}
                maxLength={20}
            />
            <Text style={styles.textLabel}>Player 3 Of Team A</Text>
                <TextInput style={styles.textInput} 
                placeholder="Type player name here"
                value={PlayerA3Name}
                onChangeText={(text) => {setPlayerA3Name(text);}}
                multiline={false}
                numberOfLines={1}
                maxLength={20}
            />
            <Text style={styles.textLabel}>Player 4 Of Team A</Text>
                <TextInput style={styles.textInput} 
                placeholder="Type player name here"
                value={PlayerA4Name}
                onChangeText={(text) => {setPlayerA4Name(text);}}
                multiline={false}
                numberOfLines={1}
                maxLength={20}
            />
            <NavigationButton screenName="PlayerNamesB" navigation={navigation}/>  
            <Button title = "submit items" onPress ={() => {
               createTeamA(PlayerA1Name,PlayerA2Name,PlayerA3Name,PlayerA4Name), navigation.navigate('PlayerNamesB');
            }}
            />
            <FlatList
            data={PlayersAState}
            keyExtractor={(e) => e.id.toString()}
                renderItem={({item}) => {
                    return (
                        
                        <Pressable onPress={() => navigation.navigate('ViewPlayersAScreen',{
                            id: item.id,
                            PlayerA1Name: item.PlayerA1Name,
                            PlayerA2Name: item.PlayerA2Name,
                            PlayerA3Name: item.PlayerA3Name,
                            PlayerA4Name: item.PlayerA4Name,
                        })}>
                        <><Text>{item.id}</Text></>
                        </Pressable>
                    )
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

    },

    textLabel:{
        fontSize:18,
        paddingLeft:10,
        marginTop:10,
    },
})

export default PlayerNamesA;