import React, { Component } from 'react';
import {
  Text, View,
  TextInput, ActivityIndicator, StatusBar, Button,
  Modal, TouchableHighlight, AsyncStorage, StyleSheet, Alert
} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Ionicons';

//------------------------- Components
class AuthLoadingScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> This is the Splash Screen ... for 3 Seconds!</Text>
        <ActivityIndicator size="large" color='red' />
        <StatusBar barStyle="default" barStyle="light-content" backgroundColor="#F99" />

      </View>
    );
  }


  componentDidMount() {
    this._bootstrapAsync();
  }


  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    setTimeout(() => {
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      this.props.navigation.navigate(userToken ? 'App' : 'Auth');

    }, 3000);
  }



}

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome to the app!',
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <StatusBar barStyle="default" barStyle="light-content" backgroundColor="#F99" />
        <Text>Welcome to Home....Landing Page</Text>
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button style={{ marginTop: 7 }} title="sign me out :)" onPress={this._signOutAsync} />
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

}

class OtherScreen extends Component {

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }


  render() {
    return (
      <View style={{ marginTop: 22 }}>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            this.setModalVisible(!this.state.modalVisible);
          }}
        >
          <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <View style={{
              backgroundColor: '#FEE', width: '85%', borderTopLeftRadius: 10,
              borderTopRightRadius: 10, overflow: 'hidden'
            }}>

              <View style={{ backgroundColor: '#00F', height: 25, alignItems: 'center' }}><Text style={{ color:'#FFF', fontSize: 16}}>Header</Text></View>
              <View style={{ height: 160, padding: 5}}>
                <Text>Hello Modal! :)</Text>

                <Text style={{ fontSize: 24 }}>some text as the filling ...</Text>
                <Icon  name='ios-checkmark-circle' size={60} color='#2F1' style={{ marginLeft: '45%', marginTop: 8}}/>
              </View>
              <View style={{ backgroundColor: '#00F', height: 40, justifyContent: 'center', alignItems: 'center', paddingTop: 5, paddingBottom: 5 }}>
                <TouchableHighlight style={{ backgroundColor: '#64A239' , borderRadius:5}}
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text style={{ color: '#FFF', fontSize: 22, padding: 5 }}>Hide Modal</Text>
                </TouchableHighlight>
              </View>


            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

class SignInScreen extends Component {

  state = {
    username: '',
    password: ''
  }

  onChangeText = (field, text) => {
    //alert(field);
    this.setState(state => ({
      ...state,
      [field]: text
    }));
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderColor: '#F00', border: 3 }}>
        <Text> SignIn Page </Text>
        <View style={{ backgroundColor: '#FFF', width: '75%' }} >
          <TextInput
            type='username'
            placeholder='username'
            style={styles.textInp}
            onChangeText={text => this.onChangeText('username', text)}
            value={this.state.username}
          />
        </View>
        <View style={{ backgroundColor: '#FFF', width: '75%', marginTop: 4 }} >
          <TextInput
            type='password'
            secureTextEntry={true}
            placeholder='password'
            style={styles.textInp}
            onChangeText={text => this.onChangeText('password', text)}
            value={this.state.password}
          />
        </View>

        {/* <Button title="Sign in!" onPress={this._signInAsync} /> */}
        <TouchableOpacity
          onPress={this._signInAsync}
          style={styles.submitBtn}
        >
          <Text style={{ color: '#FFF' }}>Sign in!</Text>
        </TouchableOpacity>
      </View>
    );
  }


  _signInAsync = async () => {
    await AsyncStorage.setItem('token', 'abc');
    this.props.navigation.navigate('App');
  }

}


const styles = StyleSheet.create({
  textInp: { height: 40, borderColor: 'gray', borderWidth: 1, fontSize: 21, textAlign: 'center' },
  submitBtn: {
    backgroundColor: '#29F',
    color: '#F00',
    fontWeight: 'bold',
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 4,
  }
});

const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

const switchNavig = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);


export default createAppContainer(switchNavig);


