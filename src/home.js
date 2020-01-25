import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';





class HomeScreen extends Component {

    // static navigationOptions = {
    //     title: 'Home :)'
    // };

    static navigationOptions = ({ navigation }) => {
      return {          
          headerRight: () => (
              <Button
                  onPress={() => navigation.navigate('MyModal')}
                  title="Info"
                  color="#ff5"
              />
          ),
      };
  };

  
  render(){
    return (
      <View style={{backgroundColor: '#FFF',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center' }}>
        <Text style={styles.titleText}>Home Screen ....</Text>
        <Button
          title="Go to User page"
          onPress={() => this.props.navigation.navigate('User', {
              userID: 100,
              userName: 'Ali Nadjar',
              userAge: 30
          })}
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

export default HomeScreen;