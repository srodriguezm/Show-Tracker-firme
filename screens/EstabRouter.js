import React from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';
import {Fonts} from '../src/util/Fonts';
import { Platform } from 'react-native';
import EstablecimientoScreen from './EstablecimientoScreen';
import DashboardScreen from './DashboardScreen';
import HomeScreen from './HomeScreen';

export const Tabs2 =TabNavigator({
  Establecimiento:{
    screen: EstablecimientoScreen,
    navigationOptions:{
        tabBarLabel:'Establecimiento',
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
export const Root2 = StackNavigator({
  Tabs:{
    screen:Tabs,
  } ,
  Home:{
    screen:HomeScreen,
  }
},
{
  mode: 'modal',
  headerMode: 'none',
});
