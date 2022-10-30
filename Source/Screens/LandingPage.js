import {  Text, View } from 'react-native';
import NavigationButton from '../Components/NavigationButton';

const LandingPage = ({navigation}) => {
  return (
    <View >
      <Text>Welcome to Scorecard Tracker 9000</Text>
      <Text>Press the below button to begin tracking your score.</Text>
      <NavigationButton screenName="NumberOfPlayers" navigation={navigation}/>
    </View>
  );
}

export default LandingPage;