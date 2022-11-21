import { View,Text,StyleSheet,TextInput,Button,FlatList,Pressable,Alert } from 'react-native';
import { useState, useContext } from "react";
import NavigationButton from '../Components/NavigationButton';
import ItemContext from '../Contexts/ItemContext';
import WhichTeamShot from './WhichTeamShot';


const TeamBShot = ({navigation}) => {
    const {updateTotalB,ID,counterB,incrementCounterB,incrementEnd,End,GameDetailsState} = useContext(ItemContext);
    var tempScoreArray = []
    var ShotValid = false;
    const [DifferentCounter, setDCounter] = useState(0);


    let CurrentEntry = GameDetailsState.find((e) => (e.id===ID));
    console.log({CurrentEntry})
    if (CurrentEntry.Scores != null || CurrentEntry.Scores != undefined){
        tempScoreArray = CurrentEntry.Scores;
    }
   
    const [TeamBShot, setTeamBShot] = useState(0);
    const [localcounter, setCounter] = useState(counterB);
    
    const onSubmit = () => {
        if (parseInt(TeamBShot) < 1 || parseInt(TeamBShot) > 4 || TeamBShot.toString().trim().length < 1
        || TeamBShot.includes(',') || TeamBShot.includes('.') || TeamBShot.includes('-')) {
            Alert.alert('Alert', 'Must enter shot between 1 and 4');
            return;
        } else {
            ShotValid = true; 
        }
        
    }

    return (
    <View style = {styles.container}>
      
        <Text style={styles.textstylelesser}>Input team B shot:</Text>
            <TextInput style={styles.textInput} 
            placeholder="Type shot here"
            keyboardType = 'numeric'
            value={TeamBShot}
            onChangeText={(text) => {setTeamBShot(text);}}
            multiline={false}
            numberOfLines={1}
            maxLength={10}
        />
        <Button title = "input shot" onPress ={() => {
            onSubmit()
            if (ShotValid === true){
                if (localcounter === 0 ){
                    incrementCounterB();
                    let ScoretoStore = (parseInt(TeamBShot) + "B")
                    tempScoreArray.push(ScoretoStore)
                    console.log(tempScoreArray)
                    updateTotalB(ID,parseInt(TeamBShot),tempScoreArray);
    
                    setCounter(1);
                    console.log('yes');
       
                    console.log(ScoretoStore);
    
                    incrementEnd();
                    navigation.pop();
                } else {
                    let ScoretoStore = (parseInt(TeamBShot) + "B")
                    tempScoreArray.push(ScoretoStore)  
                    console.log(tempScoreArray)
                    updateTotalB(ID,(parseInt(CurrentEntry.TeamBTotal) + parseInt(TeamBShot)),tempScoreArray) 
    
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

export default TeamBShot;