import React from "react";
import { View,Text,StyleSheet,TextInput,Button,FlatList,Pressable } from "react-native";
import { useState, useContext } from "react";
import ItemContext from "../Contexts/ItemContext";

const PlayerNamesB = ({navigation, route}) => {
    const {PlayersBState,createTeamB} = useContext(ItemContext);

    const [PlayerB1Name, setPlayerB1Name] = useState("");
    const [PlayerB2Name, setPlayerB2Name] = useState("");
    const [PlayerB3Name, setPlayerB3Name] = useState("");
    const [PlayerB4Name, setPlayerB4Name] = useState("");
    return(
        <View>
            <Text style={styles.textLabel}>Player 1 Of Team B</Text>
                <TextInput style={styles.textInput} 
                placeholder="Type player name here"
                value={PlayerB1Name}
                onChangeText={(text) => {setPlayerB1Name(text);}}
                multiline={false}
                numberOfLines={1}
                maxLength={20}
            />
            <Text style={styles.textLabel}>Player 2 Of Team B</Text>
                <TextInput style={styles.textInput} 
                placeholder="Type player name here"
                value={PlayerB2Name}
                onChangeText={(text) => {setPlayerB2Name(text);}}
                multiline={false}
                numberOfLines={1}
                maxLength={20}
            />
            <Text style={styles.textLabel}>Player 3 Of Team B</Text>
                <TextInput style={styles.textInput} 
                placeholder="Type player name here"
                value={PlayerB3Name}
                onChangeText={(text) => {setPlayerB3Name(text);}}
                multiline={false}
                numberOfLines={1}
                maxLength={20}
            />
            <Text style={styles.textLabel}>Player 4 Of Team B</Text>
                <TextInput style={styles.textInput} 
                placeholder="Type player name here"
                value={PlayerB4Name}
                onChangeText={(text) => {setPlayerB4Name(text);}}
                multiline={false}
                numberOfLines={1}
                maxLength={20}
            />
            <Button title = "submit items" onPress ={() => {
               createTeamB(PlayerB1Name,PlayerB2Name,PlayerB3Name,PlayerB4Name, () => navigation.pop());
            }}
            />
            <FlatList
            data={PlayersBState}
            keyExtractor={(e) => e.id.toString()}
                renderItem={({item}) => {
                    return (
                        
                        <Pressable onPress={() => navigation.navigate('ViewPlayersBScreen',{
                            id: item.id,
                            PlayerB1Name: item.PlayerB1Name,
                            PlayerB2Name: item.PlayerB2Name,
                            PlayerB3Name: item.PlayerB3Name,
                            PlayerB4Name: item.PlayerB4Name,
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

export default PlayerNamesB;