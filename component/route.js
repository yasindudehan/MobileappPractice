import React, { Component } from 'react';
import {View,Text,AsyncStorage,ActivityIndicator,StatusBar} from 'react-native';
import {createStackNavigator,createAppContainer,createSwitchNavigator} from 'react-navigation';
import HomeScreen from './Home';
import LoginScreen from './Login';
class Authentication extends React.Component{
    constructor(props){
      super(props);
      this.loadData();
    }
  render(){
    return(
     <View>
     <ActivityIndicator/>
     <StatusBar barStyle="default"/>
     </View>
    );

  }
    loadData= async()=>{
     const logged= await AsyncStorage.getItem('logged');
     this.props.navigation.navigate(logged !== '1'? 'Auth':'App') ;
    }


}
 const AppStack=createStackNavigator({Home:HomeScreen});
 const AuthStack=createStackNavigator({Login:LoginScreen});

 export default createAppContainer(
           createSwitchNavigator(
           { 
                   AuthLoading:Authentication,
                   App:AppStack,
                   Auth:AuthStack
           },{initialRouteName:'AuthLoading',
         }
           

           )

 );