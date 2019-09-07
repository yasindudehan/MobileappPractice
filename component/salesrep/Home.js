import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  AsyncStorage,
  Image,
} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Sales rep Home Screen</Text>
        <TouchableOpacity onPress={this.logOut} style={styles.button1}>
          <Text>LOGOUT</Text>
        </TouchableOpacity>
        <View style={styles.flexd}>
          <TouchableOpacity style={styles.buttons}>
            <Image
              source={require('../Image/profile.png')}
              style={styles.logo}
            />
            <Text>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}>
            <Image
              source={require('../Image/addOrder.png')}
              style={styles.logo}
            />
            <Text>Add Order</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}>
            <Image source={require('../Image/stock.png')} style={styles.logo} />
            <Text>Balance Stock</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  logOut = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

const styles = (StyleSheet.home = {
  container: {
    flex: 1,
    backgroundColor: '#6c81a3',
  },
  flexd: {
    flexDirection: 'row',
  },
  button1: {
    //justifyContent:'center',
    width: 100,
    height: 50,
    backgroundColor: 'blue',
  },
  button2: {
    width: 50,
    height: 50,
    margin: 10,
    backgroundColor: 'blue',
    borderRadius: 100,
  },
  button2Text: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingBottem:10,
    margin: 0,
    padding: 10,
    fontSize: 40,
    color: 'white',
  },
  buttons: {
    width: 70,
    height: 70,
    // backgroundColor: '#1e2a3d',
    borderRadius: 200,
    margin: 50,
    //marginLeft: 20,
  },
  logo: {
    width: 70,
    height: 70,
  },
});
