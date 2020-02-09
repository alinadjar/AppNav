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


import Ionicons from 'react-native-vector-icons/Ionicons';


// SCREENS
import AuthScreen from './components/auth';
import Games from './components/game';
import GamesArticle from './components/game/article';
import News from './components/news';
import NewsArticle from './components/news/article';
import Logo from './utils/Logo';

const headerConf = {
    headerTitleAlign: 'center', // alignment of the item inside toolbar
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#001338'
        },
        headerTintColor: 'white',
        headerTitle: Logo
    }
}


const AuthStack = createStackNavigator({
    SignIn: AuthScreen
});


const NewsStack = createStackNavigator({
    News: News,
    Article: NewsArticle
}, headerConf);

const GameStack = createStackNavigator({
    Games: Games,
    Article: GamesArticle
}, headerConf);



const AppStack = createBottomTabNavigator({
    News: NewsStack,
    Games: GameStack
}, {
    tabBarOptions: {
        activeTintColor: '#fff',
        showLabel: false,
        activeBackgroundColor: '#00194b',
        inactiveBackgroundColor: '#001338',
        style: {
            backgroundColor: '#001338',
        }
    }
}, {
    initialRouteName: 'News',
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'News') {
                iconName = `ios-basketball`;
            } else if (routeName === 'Games') {
                iconName = `md-tv`;
            }

            return <Ionicons name={iconName} size={25} color={tintColor} />;
        }
    })
});




// const RootNavigator = createAppContainer(
//     createSwitchNavigator({
//         AppStart: AppStack,
//         AuthStart: AuthStack
//     }, {
//         initialRouteName: 'AuthStart'
//     }));
// export default RootNavigator;




// export default createAppContainer(
//     createStackNavigator({
//         AppStart: AppStack,
//         AuthStart: AuthStack,
//         Home: HomeScreen
//     },
//     {
//       initialRouteName: 'Home',
//     })
// );


export default RootNavigator = () => {
    return createAppContainer(
        createSwitchNavigator({
            App: AppStack,
            Auth: AuthStack
        }, {
            initialRouteName: 'Auth'
        }));
}



// export default RootNavigator = (isAuthenticated) => {
//     return createAppContainer(
//         createSwitchNavigator({
//             App: AppStack,
//             Auth: AuthStack
//         }, {
//             initialRouteName: isAuthenticated? 'App' : 'Auth'
//         }));
// }



