import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './Source/Screens/LandingPage';
import { ItemProvider } from './Source/Contexts/ItemContext';
import GameDetails from './Source/Screens/GameDetails';
import ViewGamesScreen from './Source/Screens/ViewGamesScreen';
import PlayerNamesA from './Source/Screens/PlayerNamesA';
import ViewPlayersAScreen from './Source/Screens/ViewPlayersAScreen';

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
            options = {{title:"Input the details of the game"}}
          />
          <Stack.Screen
            name='ViewGamesScreen'
            component = {ViewGamesScreen}
            options = {{title:"View games screen"}}
          />
          <Stack.Screen
            name='PlayerNamesA'
            component = {PlayerNamesA}
            options = {{title:"Input player names for team A"}}
          />
          <Stack.Screen
            name='ViewPlayersAScreen'
            component = {ViewPlayersAScreen}
            options = {{title:"Viewing Players for team A"}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ItemProvider>
  );
}



export default App;