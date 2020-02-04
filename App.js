import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import HomeScreenIndex from './src/simpleChatApp/HomeScreen';
import SplashScreen from './src/simpleChatApp/Splash/splash1';


const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  Landing: HomeScreenIndex,
},
{
  // `initialRouteName` tells the React Navigation navigator
  // which route to start at. If you don't specify an initial
  // route it'll choose the first route in the navigator config.
  // In this example we tell it to start on the 'Splash' route,
  // otherwise it would have shown the 'App' route.
  initialRouteName: 'Splash'
});

//export default createAppContainer(InitialNavigator);



const FinalApp = createAppContainer(InitialNavigator);
export default class AwesomeApp extends Component {
  render() {
    return (
      // <HomeScreenIndex />
      <FinalApp />
    );
  }
}







