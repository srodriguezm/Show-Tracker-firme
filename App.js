/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, {Component} from 'react';
 import {Platform,
   StyleSheet,
   View,
   Dimensions,
   Text,
   TextInput,
   Alert,
   KeyboardAvoidingView,
   ToolbarAndroid,
   StatusBar,
   TouchableOpacity,
   Button,
   ScrollView,
   Picker,
   AsyncStorage
 } from 'react-native';
 import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';
 import LoginScreen from './Login/Login';
 import HomeScreen from './Home/Home';
 const instructions = Platform.select({
   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
   android:
     'Double tap R on your keyboard to reload,\n' +
     'Shake or press menu button for dev menu',
 });

 type Props = {};
 export default class App extends Component<Props> {
   render() {
     return (
       <View style={styles.container}>
           <Text style={styles.welcome}>Welcome to React Native!</Text>
         <Text style={styles.instructions}>Juan chupa vergas</Text>
         <Text style={styles.instructions}>{instructions}</Text>
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
   },
   welcome: {
     fontSize: 20,
     textAlign: 'center',
     margin: 10,
   },
   instructions: {
     textAlign: 'center',
     color: '#333333',
     marginBottom: 5,
   },
 });
 const Pantallas = StackNavigator({
   Login: {
     screen: LoginScreen
   },
   Home: {
     screen: HomeScreen
   },
   Formato: {
     screen: TabNavigator({
       Casa: {
         screen: HogarScreen,
         activeTintColor: '#e91e63'
       },
       Intra: {
         screen: IntraScreen,
         activeTintColor: '#e91e63'
       },
       Peri: {
         screen: PeriScreen,
         activeTintColor: '#e91e63'
       }
     }, {
       tabBarPosition: 'bottom',
       tabBarOptions: {
         activeTintColor: '#10f43b',
         backgroundColor: '#058222',
         style: {
           backgroundColor: '#058222'
         }
       }
     },)
   }
 });
