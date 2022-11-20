import {  Text, View,Button,Alert,StyleSheet,Pressable } from 'react-native';
import { useState, useContext } from "react";
import NavigationButton from '../Components/NavigationButton';
import ItemContext from '../Contexts/ItemContext';

const WhichTeamShot = ({navigation}) => {
  const {End,GameDetailsState,ID} = useContext(ItemContext);
  let CurrentEntry = GameDetailsState.find((e) => (e.id===ID));
  let CurrentTotalA;
  if (CurrentEntry.TeamATotal != null){
    CurrentTotalA = CurrentEntry.TeamATotal;
  } else {
    CurrentTotalA = 0;
  }

  let CurrentTotalB;
  if (CurrentEntry.TeamBTotal != null){
    CurrentTotalB = CurrentEntry.TeamBTotal;
  } else {
    CurrentTotalB = 0;
  }

  if (CurrentTotalA >= 21 || CurrentTotalB >= 21 ){
    navigation.navigate('GameEnd');
  }

  const forceEnd =() => {
    if (CurrentTotalA > 0 && CurrentTotalB > 0){
      navigation.navigate('GameEnd');
    } else {
        Alert.alert('Alert', 'At least input 1 value for each team before doing that!');
        return;
    }
  }

  return (
    <View style = {styles.container}>
      <Text style = {styles.textstyleCap}>The current End is {End}</Text>
      <Text style = {styles.textstylelesser}>The current total for team A is {CurrentTotalA}</Text>
      <Text style = {styles.textstylelesser}>The current total for team B is {CurrentTotalB}</Text>
      <Text style = {styles.textstyle}>Please indicate which team shot this end by clicking on the team below</Text>
      <Pressable style={styles.buttonStyle} onPress={() => {
          navigation.navigate("TeamAShot")
        }}>
          <Text>Click here to input shot for Team A</Text>
      </Pressable>

      <Pressable style={styles.buttonStyle} onPress={() => {
          navigation.navigate("TeamBShot")
        }}>
          <Text>Click here to input shot for Team B</Text>
      </Pressable>

      <Pressable style={styles.buttonStyleRed} onPress={() => {
          forceEnd()
        }}>
          <Text>Press here to end game immediately</Text>
      </Pressable>
    </View>
  );
  
}

const styles = StyleSheet.create({
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

  buttonStyle:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#5693f5',
    marginBottom:15
  },

  buttonStyleRed:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#de3d23',
    marginBottom:15
  },
})

export default WhichTeamShot;