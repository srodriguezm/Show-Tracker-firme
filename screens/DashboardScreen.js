import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View, ScrollView, Button, Text, Body, TouchableOpacity } from 'react-native';
import {Card, CardItem} from 'react-native-elements';
import {Fonts} from '../src/util/Fonts';
import Scroll from './Scroll';

class DashboardScreen extends Component{
	static navigationOptions = {
      header: null
  }
	render(){
		return (
		<View style={styles.container}>
            <View style = {styles.bottomContainer}>
						<TouchableOpacity style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate('Home')} >
							<Text style={styles.buttonText}>
								Su madre es así no?
							</Text>
						</TouchableOpacity>
            </View>
            <View style = {styles.contentContainer}>
                <Scroll>
                  <Text style={styles.texto}>  que es la joda </Text>
									<Text style={styles.texto}> par de catre</Text>
                </Scroll>
            </View>
      </View>
		);
	}
}
export default DashboardScreen;
const styles = StyleSheet.create({
	container: {
    flex: 1,
    justifyContent: 'center',
  },
	bottomContainer: {
		padding: 20,
	},
	buttonContainer: {
		backgroundColor: '#800080',
		paddingVertical: 15,
	},
	buttonText: {
		fontSize: 30,
		textAlign: 'center',
		color: 'white',
		fontWeight:'bold',
		opacity:0.9,
	},
	contentContainer:{
		alignItems:'center',
		flexGrow: 1,
		justifyContent: 'center',
	},
	texto: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    fontFamily: Fonts.MerriweatherSans,
  },
});
