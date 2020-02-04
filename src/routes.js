import React from 'react';
import {
    Button,
    View,
    Text,
} from 'react-native';

import {
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, createTabNavigator } from 'react-navigation-tabs';
//import { createDrawerNavigator } from 'react-navigation-drawer';


// SCREENS
import AuthScreen from './components/auth';
import Games from './components/game';
import News from './components/news';


const AuthStack = createStackNavigator({
    SignIn: AuthScreen
});

const AppStack = createBottomTabNavigator({
    News: News,
    Games: Games
});

// export default RootNavigator = () => {
//     return createAppContainer(
//         createSwitchNavigator({
//             App: AppStack,
//             Auth: AuthStack
//         }, {
//             initialRouteName: 'Auth'
//         }));
// }


// const RootNavigator = createAppContainer(
//     createSwitchNavigator({
//         AppStart: AppStack,
//         AuthStart: AuthStack
//     }, {
//         initialRouteName: 'AuthStart'
//     }));


class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome to the app!',
    };

    render() {
        return (
            <View>
                <Text>Now inside HomeScreen</Text>
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


export default createAppContainer(
    createStackNavigator({
        AppStart: AppStack,
        AuthStart: AuthStack,
        Home: HomeScreen
    },
    {
      initialRouteName: 'Home',
    })
);

//export default RootNavigator;


