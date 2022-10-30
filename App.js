import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './Source/Screens/LandingPage';
import { ItemProvider } from './Source/Contexts/ItemContext';
import NumberOfPlayers from './Source/Screens/NumberOfPlayers';
import GameDetails from './Source/Screens/GameDetails';
import ViewGamesScreen from './Source/Screens/ViewGamesScreen';

const App = () => {
  const Stack = createNativeStackNavigator();  
  return (
    <ItemProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='LandingPage'>
          <Stack.Screen
            name='LandingPage'
            component = {LandingPage}
            options = {{title:"Scorecard Tracker 9000"}}
          />
          <Stack.Screen
            name='GameDetails'
            component = {GameDetails}
            options = {{title:"Details of the game"}}
          />
          <Stack.Screen
            name='NumberOfPlayers'
            component = {NumberOfPlayers}
            options = {{title:"How many players are there?"}}
          />
          <Stack.Screen
            name='ViewGamesScreen'
            component = {ViewGamesScreen}
            options = {{title:"View games screen"}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ItemProvider>
  );
}



export default App;