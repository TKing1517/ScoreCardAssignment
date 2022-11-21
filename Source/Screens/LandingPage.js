import {  Text, View,StyleSheet,Button,Pressable } from 'react-native';

import NavigationButton from '../Components/NavigationButton';

const LandingPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}>Welcome to Scorecard Tracker 9000</Text>
      <Text style={styles.textstyle}>Press the below button to begin tracking your score.</Text>
      <Pressable style={styles.buttonStyle} onPress={() => {
            navigation.navigate('GameDetails')
        }}>
            <Text style={styles.textstyle}>{'Click here to create a Score Card'}</Text>
      </Pressable>
      <Text style={styles.textstyle}>Or</Text>
      <Pressable style={styles.buttonStyle} onPress={() => {
            navigation.navigate('ViewLoadedGames')
        }}>
            <Text style={styles.textstyle}>{'Click to view previous games'}</Text>
      </Pressable>
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
  

});


export default LandingPage;