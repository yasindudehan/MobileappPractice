import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

export default class ProfileScreenS extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Profile',
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
        <Text>Profile</Text>
      </View>
    );
  }
}
const styles = (StyleSheet.salesrepProfile = {
  backlogo: {
    width: 40,
    height: 30,
    margin: 0,
  },
});
