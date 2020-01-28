import React, { Component } from 'react';
//import { View, Text, StyleSheet, Image } from 'react-native';
import { Image } from 'react-native';
import { NavigationActions, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Root, List } from "native-base";


//-----------------------------------------------------------------------


import BaseScreen from './src/base';
import HomeScreen from './src/home';
import UserScreen from './src/user';
import AboutScreen from './src/about';
import Accordion1Screen from './src/accordion1';
import CardScreen from './src/card';
import ListScreen from './src/list';
import MultiTabs from './src/MultiTabs';



const RootStack = createStackNavigator(
  {
    BASE: {
      screen: BaseScreen,
    },
    HOME: {
      screen: HomeScreen,
    },
    USER: {
      screen: UserScreen,
    },
    ABOUT: {
      screen: AboutScreen,
    },
    ACCORD1: {
      screen: Accordion1Screen,
    },
    CARD: {
      screen: CardScreen,
    },
    LIST: {
      screen: ListScreen      
    }, 
    MultiTAB: {
      screen: MultiTabs
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(RootStack);
export default () =>
  <Root>
    <AppContainer />
  </Root>;
