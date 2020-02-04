

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

import AuthScreen from './src/components/auth';

class App extends Component {
  render() {

    //const MainContent = RootNavigator();
    return (
      // <View style={ styles.container }>        
      //   <RootNavigator />
      //   {/* <AuthScreen /> */}
      //   <Text>Hey....</Text>
      // </View>
      <RootNavigator />
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
