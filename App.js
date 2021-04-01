import * as React from 'react';
import { View } from 'react-native';
import SoundButton from './components/SoundButton'
import AppHeader from './components/AppHeader'
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import BuzzerScreen from './screens/BuzzerScreen'


export default class App extends React.Component {
  render() {
    return (
      <View>
       <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
BuzzerScreen:BuzzerScreen,
})

const AppContainer = createAppContainer(AppNavigator)