

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
		date:"Sábado 24/11/2018",
		title: "Toque de metal en Rock the night 80´s",
		picture: require('./images/RTN80.jpg'),
		content:<><Text style={{textAlign:'justify', fontWeight: 'bold',fontFamily: Fonts.MerriweatherSans}}>{"\n"}Artista: Ekthelion{"\n"}</Text>
							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans}}>Llegamos a este bar luego de dos meses de inactividad. Pero no piensen que los olvidamos. Mejor vengan a sacudir la cabeza con nosotros como antes</Text>

							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans}}>{"\n"}¿Cómo llegar?{"\n"}</Text>
							 <Image source = {require('../img/rtn80s.jpg')} style={{width:260, height: 260}} />
							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans}}>{"\n"}Dirección: Calle 6# 71d-77 sur</Text>
							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans}}>{"\n"}Hora: {"\n"}8:00 PM </Text>
							 <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans}}>{"\n"}Aforo:</Text>
							 <Text style={{color:'green',fontFamily: Fonts.MerriweatherSans}}>Boletas disponibles</Text>
						</>


	},
	{
		id:"1",
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
				<Text style = {styles.bannerEv}>Eventos próximos de Metal</Text>
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
