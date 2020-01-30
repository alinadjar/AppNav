import React, { Component } from 'react';
import { View } from 'react-native';



import { Button, Text, Icon, Footer, FooterTab } from "native-base";


import LucyChat from './LucyChat';
import JadeChat from './JadeChat';
import NineChat from './NineChat';

//import { TabNavigator } from "react-navigation";
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const resut = createAppContainer((MainScreenNavigator = createBottomTabNavigator(
  {
    LucyChat: { screen: LucyChat },
    JadeChat: { screen: JadeChat },
    NineChat: { screen: NineChat }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigation.state.index === 0}
              onPress={() => props.navigation.navigate("LucyChat")}>
              <Icon name="bowtie" />
              <Text>Lucy</Text>
            </Button>
            <Button
              vertical
              active={props.navigation.state.index === 1}
              onPress={() => props.navigation.navigate("JadeChat")}>
              <Icon name="briefcase" />
              <Text>Jade</Text>
            </Button>
            <Button
              vertical
              active={props.navigation.state.index === 2}
              onPress={() => props.navigation.navigate("NineChat")}>
              <Icon name="headset" />
              <Text>Nine</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
)));
export default resut;


