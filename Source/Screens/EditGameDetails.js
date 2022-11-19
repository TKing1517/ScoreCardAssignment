import React from "react";
import { View,Text,StyleSheet,TextInput,Button,FlatList,Pressable,Alert} from 'react-native';
import { useState, useContext } from "react";
import ItemContext from "../Contexts/ItemContext";

const EditGameDetails = ({navigation,route}) => {
    const {Id} = route.params;
    const{GameDetailsState,EditResults} = useContext(ItemContext);
    var validTotals = false;
    const currentEntry = GameDetailsState.find((e) => e.id===Id);
    const [teamAtotal,setATotal] = useState(currentEntry.TeamATotal);
    const [teamBtotal,setBTotal] = useState(currentEntry.TeamBTotal);
    

    const onSubmit = () => {
        if (teamAtotal.trim().length < 1 || teamBtotal.trim().length < 1) {
            Alert.alert('Alert', 'Must enter a total');
            return;
        } else {
            validTotals = true; 
        }
        
    }

    return(
        <View>
            <Text>Competition Name: {currentEntry.competitonName}</Text>
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
                    EditResults(currentEntry.id,teamAtotal,teamBtotal),navigation.pop();
                }
            }}
            />
        </View>
        
    )
};

const styles = StyleSheet.create({
 
})

export default EditGameDetails;