

import React, { Component } from 'react';
import {  
  View,
  Text,  
  StyleSheet
} from 'react-native';


class Game extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text>Now inside Game</Text>      
      </View>
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

export default Game;
