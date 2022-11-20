import {  Text, View,StyleSheet,Button } from 'react-native';

import NavigationButton from '../Components/NavigationButton';

const LandingPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}>Welcome to Scorecard Tracker 9000</Text>
      <Text style={styles.textstyle}>Press the below button to begin tracking your score.</Text>
      <Button 
        title={'Click here to create a Score Card'}
        onPress={() => navigation.navigate('GameDetails')}
      />
      <Text style={styles.textstyle}>Or</Text>
      <Button 
        title={'Click to view previous games'}
        onPress={() => navigation.navigate('ViewLoadedGames')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  lesserContainer: {
    borderWidth: 10,
    borderColor: 'black',
    borderRadius: 4,
    padding: 5,
    marginVertical: 5
  },

  textstyle: {
    fontSize: 15,
    fontWeight: 'bold',

  },
  

});


export default LandingPage;