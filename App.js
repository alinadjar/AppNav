import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import HomeScreenIndex from './src/simpleChatApp/HomeScreen';
import SplashScreen from './src/simpleChatApp/Splash/splash1';


const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  Landing: HomeScreenIndex,
});


const FinalApp = createAppContainer(InitialNavigator);

export default class AwesomeApp extends Component {
  render() {
    return (
      // <HomeScreenIndex />
      <FinalApp />
    );
  }
}







