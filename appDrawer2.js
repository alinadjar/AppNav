import React, { Component } from 'react';
//import { View, Text, StyleSheet, Image } from 'react-native';
import { Image } from 'react-native';
import { NavigationActions, createAppContainer } from 'react-navigation';


import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import {
  Container, Header, Title, Content, Footer, FooterTab,
  Button, Left, Right, Body, Icon, Text, Accordion
} from 'native-base';



//-----------------------------------------------------------------------
const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];



import Ionicons from 'react-native-vector-icons/Ionicons';

class MyHomeScreen extends Component {

  static navigationOptions = {
    drawerLabel: 'Sup Lead',
    drawerIcon: () => (
      <Image
        style={{ width: 30, height: 30 }}
        sourec={require('./src/assets/images/benz.png')}
      />
    )
  }

  navigateToScreen = (route) => () => {
    const navigationAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigationAction);
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
          <Text>Home Screen ....</Text>
          <Text onPress={this.navigateToScreen('Notifications')}>Click Here </Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}


class MyAboutScreen extends Component {

  static navigationOptions = {
    drawerLabel: 'About',
    drawerIcon: () => <Ionicons name="ios-brush" size={24} />
  }

  navigateToScreen = (route) => () => {
    const navigationAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigationAction);
  }

  render() {
    return (
      // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      //   <Text>This is the about screen....</Text>
      //   {/* <Button
      //     onPress={() => this.props.navigation.navigate('Home')}
      //     title="Go to Home"
      //   /> */}
      //   <Text onPress={this.navigateToScreen('Home')}>Click Here </Text>
      // </View>

      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
          <Text>About Screen ....</Text>
          <Accordion dataArray={dataArray} expanded={0} style={{ width: '100%' }}
            headerStyle={{ backgroundColor: "#b7daf8" }}
            contentStyle={{ backgroundColor: '#F55' }}
            icon="add"
            expandedIcon="remove"
            iconStyle={{ color: "green" }}
            expandedIconStyle={{ color: "red" }}
          />
          <Text onPress={this.navigateToScreen('Notifications')}>Click Here </Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}





const customNavigator = (props) => (
  <Container>
    <Header style={{ height: 30 }} >
      <Body>
        <Image
          style={{ width: 20, height: 25 }}
          source={require('./src/assets/images/setting.png')} />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
);




const MyNavigator = createAppContainer(createDrawerNavigator({
  Home: {
    screen: MyHomeScreen,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: 'Supreme Leader'
    })
  },
  Notifications: MyAboutScreen
},
  {
    initialRouteName: 'Home',
    //drawerWidth: 200,
    //drawerPosition: 'right',
    //drawerBackgroundColor: 'red',
    //drawerType: 'front', // back , slide --> push the component as the drawer opens? or just open on that?!
    contentComponent: customNavigator,
    contentOptions: {// this config will apply to the items inside the drawer (drawerItems)
      activeTintColor: 'red',
      activeBackgroundColor: 'blue',
    },
  })
);


export default class App extends Component {
  render() {
    return (
      <MyNavigator />
    );
  }
}
