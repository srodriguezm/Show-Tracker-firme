

import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View, ScrollView, Button, Text,
	Image, Body, TouchableOpacity, ImageBackground,TextInput,Dimensions} from 'react-native';
import {Card, SearchBar} from 'react-native-elements'
import {Fonts} from '../src/util/Fonts';
import { CardList } from './CardList'
import Scroll from './Scroll';
const {width:WIDTH}= Dimensions.get('window')

const cards = [
	{
		id:"0",
		date:"Domingo 2/12/2018",
		title: "Salsaton en La aldea",
		picture: require('../img/laldea.jpg'),
		content: <><Text style={{textAlign:'justify', fontWeight: 'bold',fontFamily: Fonts.MerriweatherSans, color:'white'}}>{"\n"}Artista: Orquesta juvenil puntapié{"\n"}</Text>
							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans, color:'white'}}>¡Hola salseros! Nosotros somos la orquesta puntapié y queremos invitarlos a romper las baldosas de la Aldea en este festival que organizamos con mucho amor</Text>

							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans, color:'white'}}>{"\n"}¿Cómo llegar?{"\n"}</Text>
							 <Image source = {require('../img/laaldea.jpg')} style={{width:260, height: 260}} />
							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans, color:'white'}}>{"\n"}Dirección: Calle 17 # 2-77</Text>
							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans, color:'white'}}>{"\n"}Hora: {"\n"}11 AM - 8 PM </Text>
							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans, color:'white'}}>{"\n"}Aforo:</Text>
							 <Text style={{color:'orange',fontFamily: Fonts.MerriweatherSans}}>Quedan pocas boletas</Text>
						</>

	},
	{
		id:"1",
		date:"Viernes 7/12/2018",
		title: "Rumba latina en Amareto Salsa y Guaguancó",
		picture: require('../img/salsab.jpg'),
		content: <><Text style={{textAlign:'justify', fontWeight: 'bold',fontFamily: Fonts.MerriweatherSans, color:'white'}}>{"\n"}Artista: Los candelabros{"\n"}</Text>
							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans, color:'white'}}>A ti, que te gusta bailar salsa, te abrimos este espacio para que nos conozcas y disfrutes de nuestra herencia latina. Ven y baila un buen rato al ritmo de nuestras trompetas</Text>

							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans, color:'white'}}>{"\n"}¿Cómo llegar?{"\n"}</Text>
							 <Image source = {require('../img/laaldea.jpg')} style={{width:260, height: 260}} />
							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans, color:'white'}}>{"\n"}Dirección: Carrera 73b # 8-7</Text>
							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans, color:'white'}}>{"\n"}Hora: {"\n"}4:30 PM </Text>
							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans, color:'white'}}>{"\n"}Aforo:</Text>
							 <Text style={{color:'green',fontFamily: Fonts.MerriweatherSans}}>Entradas disponibles</Text>
						</>

	}
]

class DashboardScreen extends Component{
	static navigationOptions = {
      header: null
  }
	render(){
		return (
		<ImageBackground source={require('../img/bar.jpg')} style={styles.container}>
			<View>
				<SearchBar placeholder="Buscar..."  round />
				<Text style = {styles.bannerEv}>Eventos próximos de Salsa</Text>
			</View>
      <View style = {styles.contentContainer}>
			 	<CardList cards={cards} />
      </View>

			<View style = {styles.bottomContainer2}>
					<TouchableOpacity style={styles.buttonContainer2} onPress={()=>this.props.navigation.navigate('Dashboard')} >
						<Text style={styles.buttonText}>
							Limpiar filtro
						</Text>
					</TouchableOpacity>

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
		backgroundColor: '#EA2027',
		paddingVertical: 15,
		borderRadius:25,
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
		backgroundColor: "transparent"
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
	bottomContainer2: {
		padding: 0,
		flexDirection: 'row',
		backgroundColor: 'black'
	},
	buttonContainer2: {
		backgroundColor: '#AC0000',
		padding: 10,
		left:80,
		marginLeft:10,
		borderRadius:15,
	},
	input:{
			width: WIDTH-55,
			height:45,
			borderRadius:25,
			fontSize:20,
			backgroundColor: 'rgba(255,255,255,0.5)',
			marginHorizontal: 25,
			marginTop:20
	},
	bannerEv:{
			color: 'white',
			fontSize: 24,
			textAlign: 'center',

			fontFamily: Fonts.FjallaOne,
	}
});
