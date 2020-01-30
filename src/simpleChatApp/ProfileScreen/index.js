import React, { Component } from "react";

import Profile from "./Profile.js";
import EditScreenOne from "./EditScreenOne.js";

//import { StackNavigator } from "react-navigation";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const stackNavigator = (DrawNav = createStackNavigator({
    Profile: { screen: Profile },
    EditScreenOne: { screen: EditScreenOne }
}));

export default createAppContainer(stackNavigator);