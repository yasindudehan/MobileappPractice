import React, { Component } from 'react';
import {View,Text,TouchableOpacity,AsyncStorage} from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions={
       title:'Home',
      };
    render() {
        return(
            <View ><Text>This is Home Screen</Text>
                  <TouchableOpacity
                  onPress={this.logOut}
                 
                  ><Text >LOGOUT</Text></TouchableOpacity>
            </View>
       
            );
         }
         logOut = async () => {
           await AsyncStorage.clear();
           this.props.navigation.navigate('Auth');
         };
    }

