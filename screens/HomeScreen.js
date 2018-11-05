import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity} from 'react-native';
import {Fonts} from '../src/util/Fonts';
class HomeScreen extends Component {
  static navigationOptions = {
      header: null
  }
    render() {
        return (
          <ImageBackground source={require('../img/otromicro2.jpg')} style={styles.container}>
            <View style={styles.contentContainer}>
              <Text style={styles.welcome}>DISFRUTA Y APOYA LA MÚSICA INDEPENDIENTE</Text>
              <Text style={styles.texto}>¡Busca presentaciones de música en vivo!...{"\n"}
                    ¡Consigue músicos para tu negocio!...{"\n"}
                    ¡Encuentra donde tocar e impulsa tu música!...
              </Text>
            </View>
            <View style={styles.bottomContainer}>
              <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate('Login')} >
                <Text style={styles.buttonText}>
                  Conoce más
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  contentContainer:{
    alignItems:'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  welcome: {
    marginTop:150,
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    fontFamily: Fonts.FjallaOne,
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
    opacity:0.9,
    fontFamily: Fonts.FjallaOne,
  },
  texto: {
    marginTop:60,
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    fontFamily: Fonts.MerriweatherSans,
  },

});
