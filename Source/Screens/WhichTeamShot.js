import {  Text, View } from 'react-native';
import NavigationButton from '../Components/NavigationButton';

const WhichTeamShot = ({navigation}) => {
  return (
    <View >
      <Text>Please indicate which team shot this end by clicking on the team below</Text>
      <NavigationButton screenName="TeamAShot" navigation={navigation}/>
      <NavigationButton screenName="TeamBShot" navigation={navigation}/>
    </View>
  );
}

export default WhichTeamShot;