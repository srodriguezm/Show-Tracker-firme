import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View, ScrollView, Button } from 'react-native';
import {Card} from 'react-native-elements';
import Scroll from './Scroll';


class DashboardScreen extends Component{

	render(){
		return (
		<View>
            <View style = {styles.container}>
                <Button  title = "Cerrar Sesión"
                 onPress={()=>this.props.navigation.navigate('Home')}/>
            </View>
            <View style = {styles.container}>

                <Scroll>
                    <Card>
                        <CardItem header button >
                          <Text>Concierto de rock en Rock the night 80´s</Text>
                          <Text>Baklash</Text>
                        </CardItem>
                        <CardItem button onPress={() => alert("Somos Baklash, una banda de rock nacida en Bogotá. Haremos un tributo a Mötorhead recordando las mejores canciones en honor al gran Lenny Kilmister. ¡Los esperamos allá!")}>
                          <Body>
                            <Text>
                              Detalles
                            </Text>
                          </Body>
                        </CardItem>
                        <CardItem button onPress={() => alert("Viernes 18 de Octubre, 2018 \n 8:00 PM")}>
                          <Body>
                            <Text>
                              ¿Cuándo es?
                            </Text>
                          </Body>
                        </CardItem>
                        <CardItem button onPress={() => alert("Rock the night 80's \n Direccion: Calle 6# 71d-77 sur")}>
                          <Body>
                            <Text>
                              Lugar
                            </Text>
                          </Body>
                        </CardItem>
                        <CardItem footer button onPress={() => alert("Te enviaremos más información al correo, revisa tu bandeja de entrada")}>
                          <Text>Más información</Text>
                        </CardItem>
                    </Card>


                    <Card>
                        <CardItem header button >
                          <Text>Lanzamiento de disco en La Roma Records</Text>
                          <Text>Vettel</Text>
                        </CardItem>
                        <CardItem button onPress={() => alert("Haremos un toque en La Roma para que conozcan Cóndor, lo nuevo de nosotros. Vamos a pasarlo una chimba ¡Habrá regalos para ustedes!")}>
                          <Body>
                            <Text>
                              Detalles
                            </Text>
                          </Body>
                        </CardItem>
                        <CardItem button onPress={() => alert("Domingo 11 de Noviembre, 2018 \n 8:00 PM")}>
                          <Body>
                            <Text>
                              ¿Cuándo es?
                            </Text>
                          </Body>
                        </CardItem>
                        <CardItem button onPress={() => alert("La Roma Records \n Direccion: Transversal 17A Bis #36-21")}>
                          <Body>
                            <Text>
                              Lugar
                            </Text>
                          </Body>
                        </CardItem>
                        <CardItem footer button onPress={() => alert("Te enviaremos más información al correo, revisa tu bandeja de entrada")}>
                          <Text>Más información</Text>
                        </CardItem>
                    </Card>


                    <Card>
                        <CardItem header button >
                          <Text>¡Salsatón en La aldea!</Text>
                          <Text>Vettel</Text>
                        </CardItem>
                        <CardItem button onPress={() => alert("A mostrar esa herencia latina con ")}>
                          <Body>
                            <Text>
                              Detalles
                            </Text>
                          </Body>
                        </CardItem>
                        <CardItem button onPress={() => alert("Domingo 11 de Noviembre, 2018 \n 8:00 PM")}>
                          <Body>
                            <Text>
                              ¿Cuándo es?
                            </Text>
                          </Body>
                        </CardItem>
                        <CardItem button onPress={() => alert("La Roma Records \n Direccion: Transversal 17A Bis #36-21")}>
                          <Body>
                            <Text>
                              Lugar
                            </Text>
                          </Body>
                        </CardItem>
                        <CardItem footer button onPress={() => alert("Te enviaremos más información al correo, revisa tu bandeja de entrada")}>
                          <Text>Más información</Text>
                        </CardItem>
                    </Card>
                </Scroll>
            </View>
        </View>
		);
	}
}
export default DashboardScreen;
