import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View, ScrollView, Button, Text, Image, Body, TouchableOpacity, ImageBackground} from 'react-native';
import {Card} from 'react-native-elements'
import {Fonts} from '../src/util/Fonts';
import Scroll from './Scroll';

class filtroSalsa extends Component{
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
										<Text style={styles.texto}>Salsaton en La aldea{"\n"}</Text>
										<Text style={styles.texto}>Orquesta juvenil puntapié</Text>
										<Image source = {require('../img/laldea.jpg')} style={styles.imgJazz} />
										<Text style={styles.texto}>Domingo 28 de Octubre, 2018 {"\n"} 2 PM
										<Text style={{color: 'green'}}> LUGARES DISPONIBLES</Text></Text>
										<Text style={styles.texto}>Direccion: Calle 4# 16d-07</Text>
						</Card>
						</Scroll>
							<View style = {styles.bottomContainer}>
							<TouchableOpacity style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate('Dashboard')} >
								<Text style={styles.buttonText}>
									Limpiar filtro
								</Text>
							</TouchableOpacity>
							</View>
            </View>
      </ImageBackground>
		);

	}
}
export default filtroSalsa;
const styles = StyleSheet.create({
	container: {
    flex: 1,
    justifyContent: 'center',
  },
	bottomContainer: {
		padding: 20,
	},
	buttonContainer: {
		backgroundColor: '#EA2027',
		paddingVertical: 15,
		  borderRadius:15,
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
	texto: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    fontFamily: Fonts.MerriweatherSans,
  },
	imgJazz:{
		width: 280,
    height: 150
	},
	rock:{
		width: 280,
    height: 150
	},
	texto: {
    fontSize: 15,
    textAlign: 'center',
    fontFamily: Fonts.MerriweatherSans,
  },
});
