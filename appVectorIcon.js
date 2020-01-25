import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity
} from 'react-native';




import Icon from 'react-native-vector-icons/Ionicons';
//import IconFA from 'react-native-vector-icons/FontAwesome';

class App extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#FFF', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Icon.Button
          name="logo-facebook"
          backgroundColor="#3b5998"
          onPress={() => console.warn('touched')}
        >
          <Text style={{ color: '#FFF', fontSize: 15, fontFamily: 'Arial' }}>Login with Facebook</Text>
        </Icon.Button>
        <Text><Icon name="ios-brush" /></Text>
        <Text>Some text here...88</Text>
        <Icon name="md-home" size={30} color="#900" />
        <TouchableOpacity onPress={() =>  alert('clicked')}>
          <Icon name="ios-airplane" size={40} color="#900"
            style={{
              borderWidth: 1,
              borderColor: '#000',
              padding: 10,
              textAlign: 'center',
              backgroundColor: 'lightgrey'
            }} />
        </TouchableOpacity>

      </View>
    );
  }
}

export default App;





