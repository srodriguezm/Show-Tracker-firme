import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View, ScrollView, Button, Text, Image, Body, TouchableOpacity } from 'react-native';
import {Card} from 'react-native-elements'
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
								<Card>
												<Text>Concierto de rock en Rock the night 80´s {"\n"}</Text>
												<Text>Baklash</Text>
												<Image source = {require('./images/RTN80.jpg')} />
												<Text>Viernes 18 de Octubre, 2018 {"\n"} 8:00 PM</Text>
												<Text>Direccion: Calle 6# 71d-77 sur</Text>
								</Card>
								<Card>
												<Text>Concierto de rock en Rock the night 80´s {"\n"}</Text>
												<Text>Baklash</Text>
												<Image source = {require('../img/sfx38079.jpg')} />
												<Text>Viernes 18 de Octubre, 2018 {"\n"} 8:00 PM</Text>
												<Text>Direccion: Calle 6# 71d-77 sur</Text>
								</Card>
								<Card>
												<Text>Concierto de rock en Rock the night 80´s {"\n"}</Text>
												<Text>Baklash</Text>
												<Image src = {"../img/RTN80.jpg"} />
												<Text>Viernes 18 de Octubre, 2018 {"\n"} 8:00 PM</Text>
												<Text>Direccion: Calle 6# 71d-77 sur</Text>
								</Card>
								<Card>
												<Text>Concierto de rock en Rock the night 80´s {"\n"}</Text>
												<Text>Baklash</Text>
												<Image src = {"../img/RTN80.jpg"} />
												<Text>Viernes 18 de Octubre, 2018 {"\n"} 8:00 PM</Text>
												<Text>Direccion: Calle 6# 71d-77 sur</Text>
								</Card>
								<Card>
												<Text>Concierto de rock en Rock the night 80´s {"\n"}</Text>
												<Text>Baklash</Text>
												<Image src = {"./images/RTN80.jpg"} />
												<Text>Viernes 18 de Octubre, 2018 {"\n"} 8:00 PM</Text>
												<Text>Direccion: Calle 6# 71d-77 sur</Text>
								</Card>
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
	cards: {
		width: '100px',
	},
	texto: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    fontFamily: Fonts.MerriweatherSans,
  },
});
