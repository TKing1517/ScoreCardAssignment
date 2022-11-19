import {  Text, View,Button,Alert } from 'react-native';
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
    <View >
      <Text>The current End is {End}</Text>
      <Text>The current total for team A is {CurrentTotalA}</Text>
      <Text>The current total for team B is {CurrentTotalB}</Text>
      <Text>Please indicate which team shot this end by clicking on the team below</Text>
      <NavigationButton screenName="TeamAShot" navigation={navigation}/>
      <NavigationButton screenName="TeamBShot" navigation={navigation}/>
      <Button title = "Press here to end game immediately"  onPress ={() => {forceEnd()} }/>
    </View>
  );
  
}

export default WhichTeamShot;