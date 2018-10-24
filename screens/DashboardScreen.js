import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View, ScrollView, Button, Text, Image, Body, TouchableOpacity, ImageBackground} from 'react-native';
import {Card} from 'react-native-elements'
import {Fonts} from '../src/util/Fonts';
import Scroll from './Scroll';

class DashboardScreen extends Component{
	static navigationOptions = {
      header: null
  }
	render(){
		return (
		<ImageBackground source={require('../img/bar.jpg')} style={styles.container}>
            <View style = {styles.bottomContainer}>
						<TouchableOpacity style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate('Home')} >
							<Text style={styles.buttonText}>
								Logout
							</Text>
						</TouchableOpacity>
            </View>
            <View style = {styles.contentContainer}>
						<Scroll>
								<Card>
												<Text style={styles.texto}>Concierto de rock en Rock the night 80´s {"\n"}</Text>
												<Text style={styles.texto}>Baklash</Text>
												<Image source = {require('./images/RTN80.jpg')} style={styles.rock} />
												<Text style={styles.texto}>Viernes 18 de Octubre, 2018 {"\n"} 8:00 PM
												<Text style={{color: 'red'}}> AGOTADO</Text></Text>
												<Text style={styles.texto}>Direccion: Calle 6# 71d-77 sur</Text>
								</Card>
								<Card>
												<Text style={styles.texto}>Concierto de rock en Hard rock {"\n"}</Text>
												<Text style={styles.texto}>Black horses</Text>
												<Image source = {require('../img/sfx38079.jpg')} />
												<Text style={styles.texto}>Sabado 18 de Octubre, 2018 {"\n"} 8:00 PM</Text>
												<Text style={styles.texto}>Direccion: Calle 6# 71d-77 sur</Text>
								</Card>
								<Card>
												<Text style={styles.texto}>Concierto de rock en Rock the night 80´s {"\n"}</Text>
												<Text style={styles.texto}>Baklash</Text>
												<Image source = {require('../img/jazz2.jpg')} style={styles.imgJazz} />
												<Text style={styles.texto}>Viernes 18 de Octubre, 2018 {"\n"} 8:00 PM</Text>
												<Text style={styles.texto}>Direccion: Calle 6# 71d-77 sur</Text>
								</Card>
								<Card>
												<Text style={styles.texto}>Lanzamiento de disco en La Roma Records</Text>
												<Text style={styles.texto}>Vettel</Text>
												<Image source = {require('../img/concert.jpg')} style={styles.imgJazz} />
												<Text style={styles.texto}>Viernes 18 de Octubre, 2018 {"\n"} 8:00 PM</Text>
												<Text style={styles.texto}>Direccion: Calle 6# 71d-77 sur</Text>
								</Card>
								<Card>
												<Text style={styles.texto}>Salsaton en La aldea{"\n"}</Text>
												<Text style={styles.texto}>Orquesta juvenil puntapié</Text>
												<Image source = {require('../img/laldea.jpg')} style={styles.imgJazz} />
												<Text style={styles.texto}>Domingo 28 de Octubre, 2018 {"\n"} 2 PM</Text>
												<Text style={styles.texto}>Direccion: Calle 4# 16d-07</Text>
								</Card>
						</Scroll>
						<Text style={styles.texto1}>Filtrar:</Text>
							<View style = {styles.bottomContainer2}>
							<TouchableOpacity style={styles.buttonContainer2} onPress={()=>this.props.navigation.navigate('Rock')} >
								<Text style={styles.buttonText}>
									Rock
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.buttonContainer2} onPress={()=>this.props.navigation.navigate('Salsa')} >
								<Text style={styles.buttonText}>
									Salsa
								</Text>
							</TouchableOpacity>
							</View>
            </View>
      </ImageBackground>
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
		fontFamily: Fonts.FjallaOne,
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
	texto1: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    fontFamily: Fonts.MerriweatherSans,
  },
	imgJazz:{
		width: 300,
    height: 150
	},
	rock:{
		width: 300,
    height: 150
	},
	texto: {
    fontSize: 15,
    textAlign: 'center',
    fontFamily: Fonts.MerriweatherSans,
  },
	bottomContainer2: {
		padding: 0,
		flexDirection: 'row',
	},
	buttonContainer2: {
		backgroundColor: '#800080',
		padding: 10,
		marginLeft:10,
	},
});
