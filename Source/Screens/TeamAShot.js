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
        if (parseInt(TeamAShot) < 1 || parseInt(TeamAShot) > 4 || TeamAShot.toString().trim().length < 1 
        || TeamAShot.includes(',') || TeamAShot.includes('.') || TeamAShot.includes('-')) {
            Alert.alert('Alert', 'Must enter shot between 1 and 4');
            return;
        } else {
            ShotValid = true; 
        }
        
    }


    return (
    <View style = {styles.container}>
      
        <Text style={styles.textstylelesser}>Input team A shot:</Text>
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

    container: {
        flex: 1,
        backgroundColor: '#ADD8E6',
        alignItems: 'center',
    
      },
      
      lesserContainer: {
        borderWidth: 10,
        borderColor: 'black',
        borderRadius: 4,
        padding: 5,
        marginVertical: 5
      },
    
      textstyleCap: {
        fontSize: 24,
      },
    
      textstylelesser: {
        fontSize: 20,
      },
    
      textstyle: {
        marginTop:20,
        marginBottom:5,
        fontSize: 17,
        textAlign:'center'
      },
    
})

export default TeamAShot;