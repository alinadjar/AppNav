import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button, Image
} from 'react-native';


class LogoTitle extends React.Component {
    render() {
        return (
            <Image
                source={require('./assets/images/setting.png')}
                style={{ width: 30, height: 30 }}
            />
        );
    }
}


class UserScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('userID', 'N/A'),
            //headerTitle: () => <LogoTitle />,
            //headerLeft: () => <LogoTitle />,
            headerRight: () => <LogoTitle />,
            // headerRight: () => (
            //     <Button
            //         onPress={() => alert('This is a button!')}
            //         title="Info"
            //         color="#fff"
            //     />
            // ),
        };
    };

    // static navigationOptions = {
    //     title: 'User :)',
    //     headerStyle: {
    //         backgroundColor: '#F00'
    //     },
    //     headerTintColor: 'blue',
    //     headerTitleStyle: {
    //         fontWeight: 'bold',
    //         color: 'green'
    //     }
    // };

    render() {

        console.warn(this.props);
        const userID = this.props.navigation.getParam('userID', 'N/A');
        const userName = this.props.navigation.getParam('userName', 'N/A');
        const userAge = this.props.navigation.getParam('userAge', 'N/A');

        return (
            <View style={{
                backgroundColor: '#FFF',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>I'm {userName} with ID = {userID}</Text>
                <Text>Age: {userAge}</Text>
                <Text style={styles.titleText}>User Screen ....</Text>
                <Button
                    title="Go Back"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Button
                    title="Update the title"
                    onPress={() => this.props.navigation.setParams({ userID: 'Updated!' })}
                />
                <Button
                    title="Go to About"
                    onPress={() => this.props.navigation.navigate('About')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default UserScreen;