
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


    // componentDidMount() {
    //     // When mounted, wait one second, then navigate to App
    //     setTimeout(() => {
    //         // Components that are placed inside a React Navigation
    //         // navigator will receive the `navigation` prop.
    //         // It's main usage is to trigger navigation events.
    //         // Right here we're telling it to navigate to the route
    //         // with the name 'App'.
    //         this.props.navigation.navigate('App');
    //     }, 5000);
    // }

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