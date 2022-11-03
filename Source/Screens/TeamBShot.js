import { View,Text,StyleSheet,TextInput,Button,FlatList,Pressable } from 'react-native';
import { useState, useContext } from "react";
import NavigationButton from '../Components/NavigationButton';
import ItemContext from '../Contexts/ItemContext';
import WhichTeamShot from './WhichTeamShot';


const TeamBShot = ({navigation}) => {
    const {TeamBTotalState,updateTotalB,createTotalB,ID,counterB,incrementCounterB,incrementEnd,createScores,updateScores,End,ScoresState} = useContext(ItemContext);
    
    const [localTeamBTotal, setTeamBTotal] = useState(0);
    const [DifferentCounter, setDCounter] = useState(0);
    const found = ScoresState.find(obj => {
        return obj.id === ID;
    });

    let CurrentEntry = TeamBTotalState.find((e) => (e.id===ID));
    console.log({CurrentEntry})
    if (CurrentEntry != null && DifferentCounter === 0){
        if (CurrentEntry.TeamBTotal > 0){
            setTeamBTotal(CurrentEntry.TeamBTotal);
            setDCounter(1);
        } 
    }
   
    const [TeamBShot, setTeamBShot] = useState(0);
    const [localcounter, setCounter] = useState(counterB);
    incrementCounterB();

    return (
    <View >
      
        <Text style={styles.textLabel}>Input team B shot:</Text>
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
            if (localcounter === 0 ){
                setTeamBTotal(parseInt(TeamBShot));
                
                createTotalB(localTeamBTotal);
                setCounter(1);
                console.log('yes');
                let ScoretoStore = (parseInt(TeamBShot) + "B")
                console.log(ScoretoStore);
                if (End === 1){
                    createScores(ScoretoStore);
                }
                incrementEnd();
                navigation.pop();
            } else {
                setTeamBTotal(parseInt(localTeamBTotal) + parseInt(TeamBShot));
                updateTotalB(ID,(parseInt(localTeamBTotal))) 
                console.log('no'); 

                incrementEnd();
                navigation.pop();
            }
            let ScoretoStore = (parseInt(TeamBShot) + "B")
            if (End === 2){
              updateScores(ID,found.ScoreEnd1,ScoretoStore)
            } else if (End === 3){
                updateScores(ID,found.ScoreEnd1,found.ScoreEnd2,ScoretoStore)
            } else if (End === 4){
                updateScores(ID,found.ScoreEnd1,found.ScoreEnd2,found.ScoreEnd3,ScoretoStore)
            } else if (End === 5){
                updateScores(ID,found.ScoreEnd1,found.ScoreEnd2,found.ScoreEnd3,found.ScoreEnd4,ScoretoStore)
            } else if (End === 6){
                updateScores(ID,found.ScoreEnd1,found.ScoreEnd2,found.ScoreEnd3,found.ScoreEnd4,found.ScoreEnd5,ScoretoStore)
            } else if (End === 7){
                updateScores(ID,found.ScoreEnd1,found.ScoreEnd2,found.ScoreEnd3,found.ScoreEnd4,found.ScoreEnd5,
                    found.ScoreEnd6,ScoretoStore)
            } else if (End === 8){
                updateScores(ID,found.ScoreEnd1,found.ScoreEnd2,found.ScoreEnd3,found.ScoreEnd4,found.ScoreEnd5,
                    found.ScoreEnd6,found.ScoreEnd7,ScoretoStore)
            } else if (End === 9){
                updateScores(ID,found.ScoreEnd1,found.ScoreEnd2,found.ScoreEnd3,found.ScoreEnd4,found.ScoreEnd5,
                    found.ScoreEnd6,found.ScoreEnd7,found.ScoreEnd8,ScoretoStore)
            } else if (End === 10){
                updateScores(ID,found.ScoreEnd1,found.ScoreEnd2,found.ScoreEnd3,found.ScoreEnd4,found.ScoreEnd5,
                    found.ScoreEnd6,found.ScoreEnd7,found.ScoreEnd8,found.ScoreEnd9,ScoretoStore)
            } else if (End === 11){
                updateScores(ID,found.ScoreEnd1,found.ScoreEnd2,found.ScoreEnd3,found.ScoreEnd4,found.ScoreEnd5,
                    found.ScoreEnd6,found.ScoreEnd7,found.ScoreEnd8,found.ScoreEnd9,found.ScoreEnd10,ScoretoStore)
            } else if (End === 12){
                updateScores(ID,found.ScoreEnd1,found.ScoreEnd2,found.ScoreEnd3,found.ScoreEnd4,found.ScoreEnd5,
                    found.ScoreEnd6,found.ScoreEnd7,found.ScoreEnd8,found.ScoreEnd9,found.ScoreEnd10,
                    found.ScoreEnd11,ScoretoStore)
            } else if (End === 13){
                updateScores(ID,found.ScoreEnd1,found.ScoreEnd2,found.ScoreEnd3,found.ScoreEnd4,found.ScoreEnd5,
                    found.ScoreEnd6,found.ScoreEnd7,found.ScoreEnd8,found.ScoreEnd9,found.ScoreEnd10,
                    found.ScoreEnd11,found.ScoreEnd12,ScoretoStore)
            } else if (End === 14){
                updateScores(ID,found.ScoreEnd1,found.ScoreEnd2,found.ScoreEnd3,found.ScoreEnd4,found.ScoreEnd5,
                    found.ScoreEnd6,found.ScoreEnd7,found.ScoreEnd8,found.ScoreEnd9,found.ScoreEnd10,
                    found.ScoreEnd11,found.ScoreEnd12,found.ScoreEnd13,ScoretoStore)
            } else if (End === 15){
                updateScores(ID,found.ScoreEnd1,found.ScoreEnd2,found.ScoreEnd3,found.ScoreEnd4,found.ScoreEnd5,
                    found.ScoreEnd6,found.ScoreEnd7,found.ScoreEnd8,found.ScoreEnd9,found.ScoreEnd10,
                    found.ScoreEnd11,found.ScoreEnd12,found.ScoreEnd13,found.ScoreEnd14,ScoretoStore)
            } else if (End === 16){
                updateScores(ID,found.ScoreEnd1,found.ScoreEnd2,found.ScoreEnd3,found.ScoreEnd4,found.ScoreEnd5,
                    found.ScoreEnd6,found.ScoreEnd7,found.ScoreEnd8,found.ScoreEnd9,found.ScoreEnd10,
                    found.ScoreEnd11,found.ScoreEnd12,found.ScoreEnd13,found.ScoreEnd14,
                    found.ScoreEnd15,ScoretoStore)
            } else if (End === 17){
                updateScores(ID,found.ScoreEnd1,found.ScoreEnd2,found.ScoreEnd3,found.ScoreEnd4,found.ScoreEnd5,
                    found.ScoreEnd6,found.ScoreEnd7,found.ScoreEnd8,found.ScoreEnd9,found.ScoreEnd10,
                    found.ScoreEnd11,found.ScoreEnd12,found.ScoreEnd13,found.ScoreEnd14,
                    found.ScoreEnd15,found.ScoreEnd16,ScoretoStore)
            } else if (End === 18){
                updateScores(ID,found.ScoreEnd1,found.ScoreEnd2,found.ScoreEnd3,found.ScoreEnd4,found.ScoreEnd5,
                    found.ScoreEnd6,found.ScoreEnd7,found.ScoreEnd8,found.ScoreEnd9,found.ScoreEnd10,
                    found.ScoreEnd11,found.ScoreEnd12,found.ScoreEnd13,found.ScoreEnd14,
                    found.ScoreEnd15,found.ScoreEnd16,found.ScoreEnd17,ScoretoStore)
            } else if (End === 19){
                updateScores(ID,found.ScoreEnd1,found.ScoreEnd2,found.ScoreEnd3,found.ScoreEnd4,found.ScoreEnd5,
                    found.ScoreEnd6,found.ScoreEnd7,found.ScoreEnd8,found.ScoreEnd9,found.ScoreEnd10,
                    found.ScoreEnd11,found.ScoreEnd12,found.ScoreEnd13,found.ScoreEnd14,
                    found.ScoreEnd15,found.ScoreEnd16,found.ScoreEnd17,found.ScoreEnd18,ScoretoStore)
            } else if (End === 20){
                updateScores(ID,found.ScoreEnd1,found.ScoreEnd2,found.ScoreEnd3,found.ScoreEnd4,found.ScoreEnd5,
                    found.ScoreEnd6,found.ScoreEnd7,found.ScoreEnd8,found.ScoreEnd9,found.ScoreEnd10,
                    found.ScoreEnd11,found.ScoreEnd12,found.ScoreEnd13,found.ScoreEnd14,
                    found.ScoreEnd15,found.ScoreEnd16,found.ScoreEnd17,found.ScoreEnd18,found.ScoreEnd19,ScoretoStore)
            } else if (End === 21){
                updateScores(ID,found.ScoreEnd1,found.ScoreEnd2,found.ScoreEnd3,found.ScoreEnd4,found.ScoreEnd5,
                    found.ScoreEnd6,found.ScoreEnd7,found.ScoreEnd8,found.ScoreEnd9,found.ScoreEnd10,
                    found.ScoreEnd11,found.ScoreEnd12,found.ScoreEnd13,found.ScoreEnd14,
                    found.ScoreEnd15,found.ScoreEnd16,found.ScoreEnd17,found.ScoreEnd18,found.ScoreEnd19,
                    found.ScoreEnd20,ScoretoStore)
            } else if (End === 22){
                updateScores(ID,found.ScoreEnd1,found.ScoreEnd2,found.ScoreEnd3,found.ScoreEnd4,found.ScoreEnd5,
                    found.ScoreEnd6,found.ScoreEnd7,found.ScoreEnd8,found.ScoreEnd9,found.ScoreEnd10,
                    found.ScoreEnd11,found.ScoreEnd12,found.ScoreEnd13,found.ScoreEnd14,
                    found.ScoreEnd15,found.ScoreEnd16,found.ScoreEnd17,found.ScoreEnd18,found.ScoreEnd19,
                    found.ScoreEnd20,found.ScoreEnd21,ScoretoStore)
            } else if (End === 23){
                updateScores(ID,found.ScoreEnd1,found.ScoreEnd2,found.ScoreEnd3,found.ScoreEnd4,found.ScoreEnd5,
                    found.ScoreEnd6,found.ScoreEnd7,found.ScoreEnd8,found.ScoreEnd9,found.ScoreEnd10,
                    found.ScoreEnd11,found.ScoreEnd12,found.ScoreEnd13,found.ScoreEnd14,
                    found.ScoreEnd15,found.ScoreEnd16,found.ScoreEnd17,found.ScoreEnd18,found.ScoreEnd19,
                    found.ScoreEnd20,found.ScoreEnd21,found.ScoreEnd22,ScoretoStore)
            } else if (End === 24){
                updateScores(ID,found.ScoreEnd1,found.ScoreEnd2,found.ScoreEnd3,found.ScoreEnd4,found.ScoreEnd5,
                    found.ScoreEnd6,found.ScoreEnd7,found.ScoreEnd8,found.ScoreEnd9,found.ScoreEnd10,
                    found.ScoreEnd11,found.ScoreEnd12,found.ScoreEnd13,found.ScoreEnd14,
                    found.ScoreEnd15,found.ScoreEnd16,found.ScoreEnd17,found.ScoreEnd18,found.ScoreEnd19,
                    found.ScoreEnd20,found.ScoreEnd21,found.ScoreEnd22,found.ScoreEnd23,ScoretoStore)
            } else if (End === 25){
                updateScores(ID,found.ScoreEnd1,found.ScoreEnd2,found.ScoreEnd3,found.ScoreEnd4,found.ScoreEnd5,
                    found.ScoreEnd6,found.ScoreEnd7,found.ScoreEnd8,found.ScoreEnd9,found.ScoreEnd10,
                    found.ScoreEnd11,found.ScoreEnd12,found.ScoreEnd13,found.ScoreEnd14,
                    found.ScoreEnd15,found.ScoreEnd16,found.ScoreEnd17,found.ScoreEnd18,found.ScoreEnd19,
                    found.ScoreEnd20,found.ScoreEnd21,found.ScoreEnd22,found.ScoreEnd23,found.ScoreEnd24,ScoretoStore)
            } else if (End === 26){
                updateScores(ID,found.ScoreEnd1,found.ScoreEnd2,found.ScoreEnd3,found.ScoreEnd4,found.ScoreEnd5,
                    found.ScoreEnd6,found.ScoreEnd7,found.ScoreEnd8,found.ScoreEnd9,found.ScoreEnd10,
                    found.ScoreEnd11,found.ScoreEnd12,found.ScoreEnd13,found.ScoreEnd14,
                    found.ScoreEnd15,found.ScoreEnd16,found.ScoreEnd17,found.ScoreEnd18,found.ScoreEnd19,
                    found.ScoreEnd20,found.ScoreEnd21,found.ScoreEnd22,found.ScoreEnd23,found.ScoreEnd24,found.ScoreEnd25,ScoretoStore)
            } else if (End === 27){
                updateScores(ID,found.ScoreEnd1,found.ScoreEnd2,found.ScoreEnd3,found.ScoreEnd4,found.ScoreEnd5,
                    found.ScoreEnd6,found.ScoreEnd7,found.ScoreEnd8,found.ScoreEnd9,found.ScoreEnd10,
                    found.ScoreEnd11,found.ScoreEnd12,found.ScoreEnd13,found.ScoreEnd14,
                    found.ScoreEnd15,found.ScoreEnd16,found.ScoreEnd17,found.ScoreEnd18,found.ScoreEnd19,
                    found.ScoreEnd20,found.ScoreEnd21,found.ScoreEnd22,found.ScoreEnd23,found.ScoreEnd24,found.ScoreEnd25,
                    found.ScoreEnd26,ScoretoStore)
            } else if (End === 28){
                updateScores(ID,found.ScoreEnd1,found.ScoreEnd2,found.ScoreEnd3,found.ScoreEnd4,found.ScoreEnd5,
                    found.ScoreEnd6,found.ScoreEnd7,found.ScoreEnd8,found.ScoreEnd9,found.ScoreEnd10,
                    found.ScoreEnd11,found.ScoreEnd12,found.ScoreEnd13,found.ScoreEnd14,
                    found.ScoreEnd15,found.ScoreEnd16,found.ScoreEnd17,found.ScoreEnd18,found.ScoreEnd19,
                    found.ScoreEnd20,found.ScoreEnd21,found.ScoreEnd22,found.ScoreEnd23,found.ScoreEnd24,found.ScoreEnd25,
                    found.ScoreEnd26,found.ScoreEnd27,ScoretoStore)
            } else if (End === 29){
                updateScores(ID,found.ScoreEnd1,found.ScoreEnd2,found.ScoreEnd3,found.ScoreEnd4,found.ScoreEnd5,
                    found.ScoreEnd6,found.ScoreEnd7,found.ScoreEnd8,found.ScoreEnd9,found.ScoreEnd10,
                    found.ScoreEnd11,found.ScoreEnd12,found.ScoreEnd13,found.ScoreEnd14,
                    found.ScoreEnd15,found.ScoreEnd16,found.ScoreEnd17,found.ScoreEnd18,found.ScoreEnd19,
                    found.ScoreEnd20,found.ScoreEnd21,found.ScoreEnd22,found.ScoreEnd23,found.ScoreEnd24,found.ScoreEnd25,
                    found.ScoreEnd26,found.ScoreEnd27,found.ScoreEnd28,ScoretoStore)
            } else if (End === 30){
                updateScores(ID,found.ScoreEnd1,found.ScoreEnd2,found.ScoreEnd3,found.ScoreEnd4,found.ScoreEnd5,
                    found.ScoreEnd6,found.ScoreEnd7,found.ScoreEnd8,found.ScoreEnd9,found.ScoreEnd10,
                    found.ScoreEnd11,found.ScoreEnd12,found.ScoreEnd13,found.ScoreEnd14,
                    found.ScoreEnd15,found.ScoreEnd16,found.ScoreEnd17,found.ScoreEnd18,found.ScoreEnd19,
                    found.ScoreEnd20,found.ScoreEnd21,found.ScoreEnd22,found.ScoreEnd23,found.ScoreEnd24,found.ScoreEnd25,
                    found.ScoreEnd26,found.ScoreEnd27,found.ScoreEnd28,found.ScoreEnd29,ScoretoStore)
            }

            }}
        />
        <Text>The current total is {localTeamBTotal}</Text>
        <FlatList
        data={TeamBTotalState}
        keyExtractor={(e) => e.id.toString()}
            renderItem={({item}) => {
                return (   
                    <><Text>{item.id}</Text><Text>{item.TeamBTotal}</Text></>
                )
            }}
        />
         <FlatList
        data={ScoresState}
        keyExtractor={(e) => e.id.toString()}
            renderItem={({item}) => {
                return (   
                    <><Text>{item.id}</Text><Text>{item.ScoreEnd1}</Text></>
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

export default TeamBShot;