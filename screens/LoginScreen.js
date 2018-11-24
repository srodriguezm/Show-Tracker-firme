import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    ImageBackground,
    Image,
    Dimensions,
    TextInput,
    TouchableOpacity, Picker
} from "react-native";
import {Icon} from 'react-native-elements';
import {Fonts} from '../src/util/Fonts';
import Scroll from './Scroll';


import wall from '../img/drum.jpg'
import logo from '../img/logo.png'

const {width:WIDTH}= Dimensions.get('window')


class LoginScreen extends Component {

    constructor(){
		super();
		this.state={
			PickerValue:''
			
		}
		
	};
    static navigationOptions={
        header:null
    }

    clickme=()=>{
		var data = this.state.PickerValue;
		if(data==""){
			alert("Por favor selecciona una opción");
		}if(data=="mu"){
            this.props.navigation.navigate('Flip');
        }
        if(data=='es')
        {
            this.props.navigation.navigate('Establecimiento');
        }
        if(data=='us')
        {
            this.props.navigation.navigate('Dashboard');
        }
		
	}

    render() {
        return (

            <ImageBackground source={wall} style={styles.backgroundContainer} >
            <Scroll>
              


            <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.logoText}>SHOW TRACKER</Text>
            </View>

            <View>
                <TextInput
                placeholder="    Usuario"
                placeholderTextColor="backgroundColor: 'rgba(255,255,255,0.9)"
                style={styles.input}
                  />
                  <TextInput
                  style={styles.input}
                  placeholder="   Contraseña"
                placeholderTextColor="backgroundColor: 'rgba(255,255,255,0.9)"
                returnKeyType="go"
                secureTextEntry
                style={styles.input}
                  />
                <View style={styles.container}>
		<Picker
        style={{width:'80%', color:'white',marginLeft:40, marginTop:20, justifyContent: 'center', alignItems: 'center',backgroundColor:'transparent'}}
        selectedValue={this.state.PickerValue}
        
		onValueChange={(itemValue,itemIndex) => this.setState({PickerValue:itemValue})}
		>
		<Picker.Item label="Selecciona una opción:" value=""/>
		<Picker.Item label="Músico" value="mu" />
		<Picker.Item label="Establecimiento" value="es"/>
        <Picker.Item label="Usuario" value="us"/>
		</Picker>


        <TouchableOpacity style = {styles.buttonContainer} onPress={this.clickme}>
                <Text style= {styles.buttonText} >Log In</Text>
                 </TouchableOpacity>
        
      </View>
            </View>
            <View style={styles.containera}>
            <View style={styles.signupWrap}>
              <Text style={styles.accountText}>No tienes una cuenta?</Text>
              <TouchableOpacity activeOpacity={.5}>
                <View>
                  <Text style={styles.signupLinkText} onPress={()=>this.props.navigation.navigate('SignUp')}>Registrate aquí!</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View>
                  <Text style={styles.signupLinkText} onPress={()=>this.props.navigation.navigate('Dashboard')}>Quiero ver los eventos!</Text>
                </View>
            <View style={styles.containera}>
                <Button title="Volver a inicio" onPress={() => this.props.navigation.goBack()} style={styles.volver} color = '#7c92f3' />
            </View>
            </Scroll>
            </ImageBackground>
        );
    }

}
export default LoginScreen;

const styles = StyleSheet.create({
    containera: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    backgroundContainer: {
        flex: 1,
        width:null,
        height:null,
        alignItems: 'center',
        justifyContent: 'center'

    },
    signupWrap: {
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop:20,
      },
      accountText: {
        color: "#D8D8D8",
        fontFamily: Fonts.MerriweatherSans,
      },
      signupLinkText: {
        color: "#FFF",
        marginLeft: 5,
        fontSize:18,
        fontFamily: Fonts.MerriweatherSans,
        textAlign: 'center',
        marginTop:10,
      },
    logo:{
        width:120,
        height:120,
        marginTop:60
    },
    logoContainer:{
        alignItems:'center'
    },
    logoText:{
        color:'white',
        fontSize:45,
        fontFamily: Fonts.FjallaOne,
        marginTop:40
    },
    forgotPasswordText: {
        color: "#ffffff",
        backgroundColor: "transparent",
        textAlign: "right",
        paddingRight: 15,
        marginTop: 25
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

    buttonText:{
        fontSize: 30,
        textAlign: 'center',
        color: 'white',
        fontFamily: Fonts.FjallaOne,
        opacity:0.9,
    
    },

    buttonContainer: {
        backgroundColor: '#AC0000',
        paddingVertical: 15,
        marginTop:30,
        borderRadius:25,
      },
      volver:{
        borderRadius:25,
        backgroundColor: 'red',
      },
});
