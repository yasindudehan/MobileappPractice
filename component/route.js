import React, { Component } from 'react';
import {View,Text} from 'react-native';
import {createStackNavigator,createAppContainer,createSwitchNavigator} from 'react-navigation';
import HomeScreen from './Home';
import LoginScreen from './Login';
export default createStackNavigator({
    login:LoginScreen,
    home:HomeScreen
   

});

