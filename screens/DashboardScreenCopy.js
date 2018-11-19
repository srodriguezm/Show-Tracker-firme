{/* 			<TextInput
			placeholder="    Buscar"
			placeholderTextColor="backgroundColor: 'rgba(255,255,255,0.9)"
			style={styles.input}
				/> */}

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
		date:"Jueves 22/11/2018",
		title: "Concierto de rock en Rock the night 80´s",
		picture: require('./images/RTN80.jpg'),
		content: <><Text style={{textAlign:'justify', fontWeight: 'bold',fontFamily: Fonts.MerriweatherSans,}}>{"\n"}Artista: Baklash{"\n"}</Text>
							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans}}>Vamos a romperla este jueves recordando temas del gran Lemmy Kilmister y su legendaria agrupación Mötorhead. A casi tres años de su muerte, vamos a gritar en honor a él</Text>

							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans}}>{"\n"}¿Cómo llegar?{"\n"}</Text>
							 <Image source = {require('../img/rtn80s.jpg')} style={{width:260, height: 260}} />
							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans}}>{"\n"}Dirección: Calle 6 # 71d-77 sur</Text>
							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans}}>{"\n"}Hora: {"\n"}8:00 PM - Primeras bandas {"\n"}9:30 PM - Salida al escenario </Text>
							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans}}>{"\n"}Aforo:</Text>
							 <Text style={{color:'orange', fontFamily: Fonts.MerriweatherSans}}>Quedan pocas boletas</Text>
						</>
	},
	{
		id:"1",
		date:"Viernes 23/11/2018",
		title: "Concierto de rock en Hard rock",
		picture: require('../img/sfx38079.jpg'),
		content: <><Text style={{textAlign:'justify', fontWeight: 'bold',fontFamily: Fonts.MerriweatherSans}}>{"\n"}Artista: Black Horses{"\n"}</Text>
							 <Text style={{textAlign:'justify'}}>Hard Rock's festival of independent artists features Black Horses: {"\n"}Nacidos en el norte de Bogotá, tendremos nuestro primer gran toque en Hard Rock</Text>

							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans}}>{"\n"}¿Cómo llegar?{"\n"}</Text>
							 <Image source = {require('../img/hardrock.jpg')} style={{width:260, height: 260}} />
							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans}}>{"\n"}Dirección: Calle 81 # 13-05</Text>
							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans}} >{"\n"}Hora: {"\n"}6:00 PM - Primeras bandas {"\n"}7:00 PM - Salida al escenario </Text>
							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans}}>{"\n"}Aforo:</Text>
							 <Text style={{color:'blue', fontFamily: Fonts.MerriweatherSans}}>Entrada libre hasta llenar cupo</Text>
						</>

	},
	{
		id:"2",
		date:"Sábado 24/11/2018",
		title: "Lanzamiento de disco en La Roma Records",
		picture: require('../img/concert.jpg'),
		content: <><Text style={{textAlign:'justify', fontWeight: 'bold',fontFamily: Fonts.MerriweatherSans}}>{"\n"}Artista: Vettel{"\n"}</Text>
							 <Text style={{textAlign:'justify'}}>¡Llegó nuestra hora! Por fin lanzamos nuestro primer disco como banda y queremos compartir esta noche con ustedes para celebrar</Text>

							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans}}>{"\n"}¿Cómo llegar?{"\n"}</Text>
							 <Image source = {require('../img/laroma.jpg')} style={{width:260, height: 260}} />
							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans}}>{"\n"}Dirección: Transversal 17A Bis #36-21</Text>
							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans}}>{"\n"}Hora: {"\n"}4:00 PM </Text>
							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans}}>{"\n"}Aforo:</Text>
							 <Text style={{color:'red',fontFamily: Fonts.MerriweatherSans}}>Agotado</Text>
						</>


	},
	{
		id:"3",
		date:"Sábado 24/11/2018",
		title: "Toque de metal en Rock the night 80´s",
		picture: require('./images/RTN80.jpg'),
		content:<><Text style={{textAlign:'justify', fontWeight: 'bold',fontFamily: Fonts.MerriweatherSans}}>{"\n"}Artista: Ekthelion{"\n"}</Text>
							 <Text style={{textAlign:'justify', fontFamily: Fonts.MerriweatherSans,}}>Llegamos a este bar luego de dos meses de inactividad. Pero no piensen que los olvidamos. Mejor vengan a sacudir la cabeza con nosotros como antes</Text>

							 <Text style={{fontFamily: Fonts.MerriweatherSans,}}>{"\n"}¿Cómo llegar?{"\n"}</Text>
							 <Image source = {require('../img/rtn80s.jpg')} style={{width:260, height: 260}} />
							 <Text style={{textAlign:'justify', fontFamily: Fonts.MerriweatherSans,}}>{"\n"}Dirección: Calle 6# 71d-77 sur</Text>
							 <Text style={{textAlign:'justify', fontFamily: Fonts.MerriweatherSans,}}>{"\n"}Hora: {"\n"}8:00 PM </Text>
							 <Text style={{textAlign:'justify', fontFamily: Fonts.MerriweatherSans,}}>{"\n"}Aforo:</Text>
							 <Text style={{color:'green', fontFamily: Fonts.MerriweatherSans}}>Boletas disponibles</Text>
						</>


	},
	{
		id:"4",
		date:"Domingo 2/12/2018",
		title: "Salsaton en La aldea",
		picture: require('../img/laldea.jpg'),
		content: <><Text style={{textAlign:'justify', fontWeight: 'bold',fontFamily: Fonts.MerriweatherSans}}>{"\n"}Artista: Orquesta juvenil puntapié{"\n"}</Text>
							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans}}>¡Hola salseros! Nosotros somos la orquesta puntapié y queremos invitarlos a romper las baldosas de la Aldea en este festival que organizamos con mucho amor</Text>

							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans}}>{"\n"}¿Cómo llegar?{"\n"}</Text>
							 <Image source = {require('../img/laaldea.jpg')} style={{width:260, height: 260}} />
							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans}}>{"\n"}Dirección: Calle 17 # 2-77</Text>
							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans}}>{"\n"}Hora: {"\n"}11 AM - 8 PM </Text>
							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans}}>{"\n"}Aforo:</Text>
							 <Text style={{color:'orange',fontFamily: Fonts.MerriweatherSans}}>Quedan pocas boletas</Text>
						</>

	},
	{
		id:"5",
		date:"Viernes 7/12/2018",
		title: "Rumba latina en Amareto Salsa y Guaguancó",
		picture: require('../img/salsab.jpg'),
		content: <><Text style={{textAlign:'justify', fontWeight: 'bold',fontFamily: Fonts.MerriweatherSans}}>{"\n"}Artista: Los candelabros{"\n"}</Text>
							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans}}>A ti, que te gusta bailar salsa, te abrimos este espacio para que nos conozcas y disfrutes de nuestra herencia latina. Ven y baila un buen rato al ritmo de nuestras trompetas</Text>

							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans}}>{"\n"}¿Cómo llegar?{"\n"}</Text>
							 <Image source = {require('../img/amareto.jpg')} style={{width:260, height: 260}} />
							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans}}>{"\n"}Dirección: Carrera 73b # 8-7</Text>
							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans}}>{"\n"}Hora: {"\n"}4:30 PM </Text>
							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans}}>{"\n"}Aforo:</Text>
							 <Text style={{color:'green',fontFamily: Fonts.MerriweatherSans}}>Entradas disponibles</Text>
						</>

	},
	{
		id:"6",
		date:"Sábado 8/12/2018",
		title: "Concierto de metal en Casa Valhalla",
		picture: require('../img/metalval.jpg'),
		content:<><Text style={{textAlign:'justify', fontWeight: 'bold',fontFamily: Fonts.MerriweatherSans}}>{"\n"}Artista: Tauros{"\n"}</Text>
							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans}}>Empecemos Diciembre con la mejor onda de metal progresivo. Conozcan nuestros nuevos sencillos en vivo y pasémosla bien con buena música</Text>

							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans}}>{"\n"}¿Cómo llegar?{"\n"}</Text>
							 <Image source = {require('../img/casavalhalla.jpg')} style={{width:260, height: 260}} />
							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans}}>{"\n"}Dirección: Carrera 22 # 74-31</Text>
							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans}}>{"\n"}Hora: {"\n"}10:00 PM </Text>
							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans}}>{"\n"}Aforo:</Text>
							 <Text style={{color:'blue',fontFamily: Fonts.MerriweatherSans}}>Entrada libre hasta llenar cupo</Text>
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
				<Text style = {styles.bannerEv}>Eventos próximos</Text>
			</View>
      <View style = {styles.contentContainer}>
			 	<CardList cards={cards} />
      </View>

			<View style = {styles.bottomContainer2}>
					<Text style={styles.texto1}>Filtrar:</Text>
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
					<TouchableOpacity style={styles.buttonContainer2} onPress={()=>this.props.navigation.navigate('Metal')} >
						<Text style={styles.buttonText}>
							Metal
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
		backgroundColor: 'transparent'
	},
	buttonContainer2: {
		backgroundColor: '#AC0000',
		padding: 10,
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
