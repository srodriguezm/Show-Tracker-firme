import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity} from 'react-native';

class HomeScreen extends Component {
  static navigationOptions = {
      header: null
  }
    render() {
        return (
          <ImageBackground source={require('../img/otromicro2.jpg')} style={styles.container}>
            <View style={styles.contentContainer}>
              <Text style={styles.welcome}>DISFRUTA Y APOYA LA MÚSICA INDEPENDIENTE</Text>
              <Text style={styles.texto}>¡Busca presentaciones de música en vivo!...
                    ¡Consigue músicos para tu negocio!...
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
    marginTop:22,
    fontWeight:'bold',
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    opacity:0.9,
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
  texto: {
    marginTop:60,
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
  },

});
