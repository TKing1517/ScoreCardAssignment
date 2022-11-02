import {  Text, View } from 'react-native';
import { useState, useContext } from "react";
import NavigationButton from '../Components/NavigationButton';
import ItemContext from '../Contexts/ItemContext';

const WhichTeamShot = ({navigation}) => {
  const {End} = useContext(ItemContext);

  return (
    <View >
      <Text>The current End is {End}</Text>
      <Text>Please indicate which team shot this end by clicking on the team below</Text>
      <NavigationButton screenName="TeamAShot" navigation={navigation}/>
      <NavigationButton screenName="TeamBShot" navigation={navigation}/>
    </View>
  );
}

export default WhichTeamShot;