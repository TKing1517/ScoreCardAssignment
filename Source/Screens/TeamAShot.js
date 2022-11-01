import { View,Text,StyleSheet,TextInput,Button,FlatList,Pressable } from 'react-native';
import { useState, useContext } from "react";
import NavigationButton from '../Components/NavigationButton';
import ItemContext from '../Contexts/ItemContext';


const TeamAShot = ({navigation}) => {
    const {TeamATotalState,updateTotalA,createTotalA,ID,counter,incrementCounter} = useContext(ItemContext);
    
    const [localTeamATotal, setTeamATotal] = useState(0);
    const [DifferentCounter, setDCounter] = useState(0);
    
    let CurrentEntry = TeamATotalState.find((e) => (e.id===ID));
    console.log({CurrentEntry})
    if (CurrentEntry != null && DifferentCounter === 0){
        console.log('Works1');
        if (CurrentEntry.TeamATotal > 0){
            setTeamATotal(CurrentEntry.TeamATotal);
            console.log('Works2');
            setDCounter(1);
        } 
    }
   
    const [TeamAShot, setTeamAShot] = useState(0);
    const [localcounter, setCounter] = useState(counter);
    incrementCounter();

    return (
    <View >
      
        <Text style={styles.textLabel}>Input team A shot:</Text>
            <TextInput style={styles.textInput} 
            placeholder="Type shot here"
            keyboardType = 'numeric'
            value={TeamAShot}
            onChangeText={(text) => {setTeamAShot(text);}}
            multiline={false}
            numberOfLines={1}
            maxLength={10}
        />
        <Button title = "input shot" onPress ={() => {
            if (localcounter === 0 ){
                setTeamATotal(parseInt(TeamAShot));
                createTotalA(localTeamATotal);
                setCounter(1);
                console.log('yes');
            } else {
                setTeamATotal(parseInt(localTeamATotal) + parseInt(TeamAShot));
                updateTotalA(ID,(parseInt(localTeamATotal))) 
                console.log('no'); 
            }
                    
            }}
        />
        <Text>The current total is {localTeamATotal}</Text>
        <FlatList
        data={TeamATotalState}
        keyExtractor={(e) => e.id.toString()}
            renderItem={({item}) => {
                return (   
                    <><Text>{item.id}</Text><Text>{item.TeamATotal}</Text></>
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

export default TeamAShot;