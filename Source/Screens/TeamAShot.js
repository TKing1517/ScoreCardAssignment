import { View,Text,StyleSheet,TextInput,Button,FlatList,Pressable,Alert } from 'react-native';
import { useState, useContext } from "react";
import NavigationButton from '../Components/NavigationButton';
import ItemContext from '../Contexts/ItemContext';
import WhichTeamShot from './WhichTeamShot';


const TeamAShot = ({navigation}) => {
    const {updateTotalA,ID,counter,incrementCounter,incrementEnd,End,GameDetailsState} = useContext(ItemContext);
    var tempScoreArray = []
    var ShotValid = false;
    const [DifferentCounter, setDCounter] = useState(0);


    let CurrentEntry = GameDetailsState.find((e) => (e.id===ID));
    console.log({CurrentEntry})
    if (CurrentEntry.Scores != null || CurrentEntry.Scores != undefined){
        tempScoreArray = CurrentEntry.Scores;
    }
   
    const [TeamAShot, setTeamAShot] = useState(0);
    const [localcounter, setCounter] = useState(counter);
    
    const onSubmit = () => {
        if (parseInt(TeamAShot) < 1 || parseInt(TeamAShot) > 4 || TeamAShot.toString().trim().length < 1) {
            Alert.alert('Alert', 'Must enter shot between 1 and 4');
            return;
        } else {
            ShotValid = true; 
        }
        
    }


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
            onSubmit()
            if (ShotValid === true){
                if (localcounter === 0 ){
                    console.log(TeamAShot)
                    incrementCounter();
                    let ScoretoStore = (parseInt(TeamAShot) + "A")
                    tempScoreArray.push(ScoretoStore)
                    console.log(tempScoreArray)
                    updateTotalA(ID,parseInt(TeamAShot),tempScoreArray);
                    setCounter(1);
                    console.log('yes');
                    console.log(ScoretoStore);
             
    
                    incrementEnd();
                    navigation.pop();
                } else {
                    let ScoretoStore = (parseInt(TeamAShot) + "A")
                    tempScoreArray.push(ScoretoStore)  
                    console.log(tempScoreArray)
                    updateTotalA(ID,(parseInt(CurrentEntry.TeamATotal) + parseInt(TeamAShot)),tempScoreArray) 
                    console.log('no'); 
    
    
                    incrementEnd();
                    navigation.pop();
                }
            }
            

            }}
        />
        <Text>The current total is {CurrentEntry.TeamATotal}</Text>
        <FlatList
        data={GameDetailsState}
        keyExtractor={(e) => e.id.toString()}
            renderItem={({item}) => {
                return (   
                    <><Text>{item.id}</Text><Text>{item.TeamATotal}</Text><Text>{item.Scores}</Text></>
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