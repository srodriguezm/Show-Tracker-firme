import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity, Image, Linking,} from 'react-native';
import {Fonts} from '../src/util/Fonts';
import Scroll from './Scroll';
import DateTimePicker from 'react-native-modal-datetime-picker';

class EstablecimientoScreen extends Component {
  static navigationOptions = {
      header: null
  }
  constructor(){
    super()
    this.state={
      isVisible: false
    }
  }
  handlePicker=()=>{
    this.setState({
      isVisible: false
    })
  }
  showPicker=()=>{
    this.setState({
      isVisible: true
    })
  }
  hidePicker=()=>{
    this.setState({
      isVisible: false
    })
  }
    render() {
        return (
          <ImageBackground source={require('../img/barlindo2.jpg')} style={styles.container}>
          <Scroll>
            <View style={styles.contentContainer}>
              <View style={styles.profilePicWrap}>
                <Image style={styles.profilePic} source={require('../img/Prudencia+and+pea.jpg')}/>
              </View>
              <Text style={styles.name}>PRUDENCIA</Text>
              <Text style={styles.profession}>Restaurante</Text>
              <Text style={styles.profession}>Dirección: Cra. 2 #1134, Bogotá</Text>

	          <Text style={{textAlign:'justify',fontFamily: Fonts.MerriweatherSans, color:'white',fontSize:18}}>{"\n"}¿Cómo llegar?{"\n"}</Text>
			  <Image source = {require('../img/PrudenciaUbic.png')} style={{width:320, height: 300}} />

              <Text style={styles.contacto}>Redes sociales y contacto:</Text>
              
              <View style={styles.bar}>
              
                <TouchableOpacity style={styles.buttonContainerTransparent} onPress={()=> Linking.openURL('https://www.facebook.com/PrudenciaBogota/')} >
                  <Image style={styles.redes} source={require('../img/face.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainerTransparent} onPress={()=> Linking.openURL('https://www.instagram.com/prudencia_restaurante/?hl=es-la')} >
                  <Image style={styles.redes} source={require('../img/insta.png')}/>
                </TouchableOpacity>
                
              </View>


              <Text style={styles.profession}>Ingresa a nuestra página</Text>
              <Text style={styles.resume} onPress={()=> Linking.openURL('https://www.prudencia.net')} >www.prudencia.net</Text>
              
              
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.buttonContainer} onPress={this.showPicker}>
                  <Text style={styles.buttonText}> Disponibilidad</Text>
                </TouchableOpacity>
              <View>
                <DateTimePicker
                  isVisible={this.state.isVisible}
                  onConfirm={this.handlePicker}
                  onCancel={this.hidePicker}
                  mode={'datetime'}
                  />
              </View>
            </View>
            <View style={styles.bottomContainer}>
              <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate('Home')} >
                <Text style={styles.buttonText}>
                  LogOut
                </Text>
              </TouchableOpacity>
            </View>
            </Scroll>
          </ImageBackground>
        );
    }
}
export default EstablecimientoScreen;

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
  name: {
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
    backgroundColor: '#AC0000',
    paddingVertical: 15,
    borderRadius:25,
  },
  buttonContainerTransparent:{
    paddingVertical: 15,
    borderRadius:25,
    padding: 18,
  },
  buttonText: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    opacity:0.9,
    fontFamily: Fonts.FjallaOne,
  },
  profession: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    fontFamily: Fonts.MerriweatherSans,
    marginTop:10
  },
  resume: {
    marginTop:20,
    fontSize: 17,
    textAlign: 'center',
    color: 'white',
    fontFamily: Fonts.MerriweatherSans,
    marginBottom:10,
  },
  contacto: {
    marginTop:25,
    fontSize: 18,
    textAlign: 'left',
    color: 'white',
    fontFamily: Fonts.MerriweatherSans,
    fontWeight: 'bold'
  },
  profilePicWrap:{
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 16,
  },
  profilePic:{
    flex: 1,
    width:null,
    alignSelf:'stretch',
    borderRadius: 100,
    borderColor:'#fff',
    borderWidth:4
  },
  bar:{
    flexDirection:'row',
    borderRadius:25,
    alignItems: 'center',
  },
  redes:{
    width: 50,
    height: 50,
    padding: 18,
  },
  musica:{
    width: 70,
    height: 70,
    padding: 18,
  },
  musica2:{
    width: 50,
    height: 70,
    padding: 18,
  }
});
