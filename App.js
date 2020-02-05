

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

import RootNavigator from './src/routes';



class App extends Component {
  render() {

    const MainContent = RootNavigator();
    return (
      
      <MainContent />

      // sending a property if you need
      // <MainContent isAuthenticated={true} /> 
    );
  }
};


export default App;
