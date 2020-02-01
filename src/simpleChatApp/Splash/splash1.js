
import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';



export default class SplashScreen extends Component {


    performTimeConsumingTask = async () => {
      return new Promise((resolve) =>
        setTimeout(
          () => { resolve('result') },
          2000
        )
      )
    }
  
    async componentDidMount() {
      // Preload data from an external API
      // Preload data using AsyncStorage
      const data = await this.performTimeConsumingTask();
  
      if (data !== null) {
        this.props.navigation.navigate('Landing');
      }
    }
  
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange' }}>
          <Text> LOADING SPLASH </Text>
          <Text> ... </Text>
          <Text> 3 Seconds </Text>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }