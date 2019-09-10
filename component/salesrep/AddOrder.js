import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

export default class OrderScreenS extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'NewOrder',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#0398fc',
      },
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('App')}>
          <Image
            source={require('../Image/back2.png')}
            style={styles.backlogo}
          />
        </TouchableOpacity>
      ),
    };
  };
  render() {
    return (
      <View>
        <Text>OrderScreen</Text>
      </View>
    );
  }
}
styles = StyleSheet.salesrepNeworder = {
  backlogo: {
    width: 40,
    height: 30,
    margin: 0,
  },
};
