import {Text, View} from 'react-native';
import {LogBox} from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/th';

dayjs.locale('th');
dayjs.extend(relativeTime);
import HomeScreen from './Screen/HomeScreen';
import NewDetailScreen from './Screen/NewDetailScreen';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
const Stack = createStackNavigator();
export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="NewDetailScreen" component={NewDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
