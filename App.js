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
import {TabNavigator,StackNavigator} from 'react-navigation';
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen'
import ForgotPasswordScreen from './screens/ForgotPasswordScreen'
import ProfileScreen from './screens/ProfileScreen'
import FlipBoardScreen from './screens/FlipBoardScreen'
import DashboardScreen from './screens/DashboardScreenCopy'
import filtroRock from './screens/filtroRockCopy'
import filtroSalsa from './screens/filtroSalsaCopy'
import filtroMetal from './screens/filtroMetalCopy'
import {Fonts} from './src/util/Fonts'
import {Icon} from 'react-native-elements'
export default class App extends Component {

  render() {
    return (
      <AppStackNavigator style={styles.containerp}/>
    );
  }
}
export const Tabs =TabNavigator({
  Profile:{
    screen: ProfileScreen,
    navigationOptions:{
        tabBarLabel:'Perfil',
        tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={30} color={tintColor}/>
    },
  },
  Dashboard:{
    screen: DashboardScreen,
    navigationOptions:{
        tabBarLabel:'Dashboard',
        tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor}/>
    },
  },
},
{
    headerMode: 'none',        // I don't want a NavBar at top
    tabBarPosition: 'bottom',  // So your Android tabs go bottom
    tabBarOptions: {
      activeTintColor: '#AC0000',  // Color of tab when pressed
      inactiveTintColor: '#fff', // Color of tab when not pressed
      showIcon: 'true', // Shows an icon for both iOS and Android
       //No label for Android
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: '#0C0C0C',
        transparent: true, // Makes Android tab bar white instead of standard blue
        height: (Platform.OS === 'ios') ? 50 : 60 // I didn't use this in my app, so the numbers may be off.
      }
    },
});
export const AppStackNavigator = StackNavigator({
  Home:{screen:HomeScreen},
  Login:{screen:LoginScreen},
  SignUp:{screen:SignUpScreen},
  Forgot:{screen:ForgotPasswordScreen},
  Rock:{screen:filtroRock},
  Salsa:{screen:filtroSalsa},
  Flip: {screen:FlipBoardScreen},
  Metal:{screen:filtroMetal},
  Dashboard:{screen:DashboardScreen},
  Tabs:{screen:Tabs},
},
{
  mode: 'modal',
  headerMode: 'none',
  });
  export const Root = StackNavigator({
    Tabs:{screen:Tabs},
    Home:{screen:HomeScreen},
    Rock:{screen:filtroRock},
    Salsa:{screen:filtroSalsa},
    Flip: {screen:FlipBoardScreen},
    Metal:{screen:filtroMetal},
    Dashboard:{screen:DashboardScreen},
    Login:{screen:LoginScreen},
    SignUp:{screen:SignUpScreen},
    Forgot:{screen:ForgotPasswordScreen},
  },
  {
    mode: 'modal',
    headerMode: 'none',
    });
const styles = StyleSheet.create({
  containerp:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#010102',
  },
});
