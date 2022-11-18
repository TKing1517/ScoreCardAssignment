import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './Source/Screens/LandingPage';
import { ItemProvider } from './Source/Contexts/ItemContext';
import GameDetails from './Source/Screens/GameDetails';
import ViewGamesScreen from './Source/Screens/ViewGamesScreen';
import PlayerNamesA from './Source/Screens/PlayerNamesA';
import PlayerNamesB from './Source/Screens/PlayerNamesB';
import WhichTeamShot from './Source/Screens/WhichTeamShot';
import TeamAShot from './Source/Screens/TeamAShot';
import TeamBShot from './Source/Screens/TeamBShot';
import ViewLoadedGames from './Source/Screens/ViewLoadedGames';
import GameEnd from './Source/Screens/GameEnd';
import EditGameDetails from './Source/Screens/EditGameDetails';
import TakingPhotoA from './Source/Screens/TakingPhotoA';
import WantPhotoA from './Source/Screens/WantPhotoA';
import TakenPicA from './Source/Screens/TakenPicA';
import TakingPhotoB from './Source/Screens/TakingPhotosB';
import TakenPicB from './Source/Screens/TakenPicB';


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
            name='PlayerNamesB'
            component = {PlayerNamesB}
            options = {{title:"Input player names for team B"}}
          />
          <Stack.Screen
            name='WhichTeamShot'
            component = {WhichTeamShot}
            options = {{title:"Which team shot this end?"}}
          />
          <Stack.Screen
            name='TeamAShot'
            component = {TeamAShot}
            options = {{title:"Team A shot"}}
          />
          <Stack.Screen
            name='TeamBShot'
            component = {TeamBShot}
            options = {{title:"Team B shot"}}
          />
          <Stack.Screen
            name='ViewLoadedGames'
            component = {ViewLoadedGames}
            options = {{title:"Viewing Loaded Games"}}
          />
          <Stack.Screen
            name='GameEnd'
            component = {GameEnd}
            options = {{title:"Game End"}}
          />
          <Stack.Screen
            name='EditGameDetails'
            component = {EditGameDetails}
            options = {{title:"Edit game details"}}
          />
          <Stack.Screen
            name='WantPhotoA'
            component = {WantPhotoA}
            options = {{title:"Take Photos?"}}
          />
          <Stack.Screen
            name='TakingPhotoA'
            component = {TakingPhotoA}
            options = {{title:"Taking Photo A"}}
          />
          <Stack.Screen
            name='TakenPicA'
            component = {TakenPicA}
            options = {{title:"Taken Pic A"}}
          />
          <Stack.Screen
            name='TakingPhotoB'
            component = {TakingPhotoB}
            options = {{title:"Taking Photo B"}}
          />
          <Stack.Screen
            name='TakenPicB'
            component = {TakenPicB}
            options = {{title:"Taken Pic B"}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ItemProvider>
  );
}



export default App;