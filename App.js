/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * import DashboardScreen from './screens/DashboardScreen';
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen'
import ForgotPasswordScreen from './screens/ForgotPasswordScreen'
import DashboardScreen from './screens/DashboardScreen'
import filtroRock from './screens/filtroRock'
import filtroSalsa from './screens/filtroSalsa'
import {Fonts} from './src/util/Fonts';
export default class App extends Component {

  render() {
    return (
      <AppStackNavigator style={styles.containerp}/>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Home:HomeScreen,
  Login:LoginScreen,
  Dashboard:DashboardScreen,
  SignUp:SignUpScreen,
  Forgot:ForgotPasswordScreen,
  Rock:filtroRock,
  Salsa:filtroSalsa
})

const styles = StyleSheet.create({
  containerp:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#010102',
  },
});
