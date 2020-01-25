
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image
} from 'react-native';



import Ionicons from 'react-native-vector-icons/Ionicons';
import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';
//import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';


class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home-747',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./src/assets/images/setting.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
      </View>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications-747',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./src/assets/images/setting.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const RouteConfig = {
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
};



const DrawerNavigatorConfig = {
  intialRouteName: 'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#FFF',
    },
    headerTintColor: '#ff5',
    headerTitleStyle: {
      color: 'white',
    },
  },
  contentOptions: {
    // add your styling here 
    activeTintColor: '#e91e63',
    itemsContainerStyle: {
      marginVertical: 0,
    },
    iconContainerStyle: {
      opacity: 1,
    },
  },
  drawerBackgroundColor: '#3BA', // sets background color of drawer
  drawerPosition: 'left',
  overlayColor: '#F00'
};

const MyDrawerNavigator = createDrawerNavigator(RouteConfig, DrawerNavigatorConfig);

export default createAppContainer(MyDrawerNavigator);