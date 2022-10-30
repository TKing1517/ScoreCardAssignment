import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './Source/Screens/LandingPage';
import { ItemProvider } from './Source/Contexts/ItemContext';
import NumberOfPlayers from './Source/Screens/NumberOfPlayers';

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
            name='NumberOfPlayers'
            component = {NumberOfPlayers}
            options = {{title:"How many players are there?"}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ItemProvider>
  );
}



export default App;