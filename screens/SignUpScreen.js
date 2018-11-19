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
    TouchableOpacity
} from "react-native";

import RadioForm, {
    RadioButton, 
    RadioButtonInput, 
    RadioButtonLabel
  } from 'react-native-simple-radio-button';

import {Fonts} from '../src/util/Fonts';
import wall from '../img/drum.jpg'
import logo from '../img/logo.png'

const {width:WIDTH}= Dimensions.get('window')

var data=[
    {label:"Músico   ", value: 0},
    {label:"Usuario",value: 1},
    {label:"Establecimiento",value:2}
];
class SignUpScreen extends Component {

    static navigationOptions={
        header:null
    }

    render() {
        return (
            <ImageBackground source={wall} style={styles.backgroundContainer} >


            <View style={styles.logoContainer} >
                <Text style={styles.logoText}>Regístrate!</Text>
            </View>

            <View>
                <TextInput
                placeholder="    Usuario"
                placeholderTextColor="backgroundColor: 'rgba(255,255,255,0.9)"
                style={styles.input}
                  />
                   <TextInput
                placeholder="    Email"
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

                   <Text style= {styles.buttonText1} >Yo soy: </Text>
                <RadioForm style={styles.radio}
                radio_props={data}
                initial={1}
                onPress={(value)=>{}}
                buttonSize={30}
                selectedButtonColor={'red'}
                buttonColor={'red'}
                labelStyle={{ fontSize:20, color:'white'}}
                disable={false}
                buttonWrapStyle={{marginLeft: 10}}
                />

                <TouchableOpacity activeOpacity={.5}>

            </TouchableOpacity>
                  <TouchableOpacity style = {styles.buttonContainer} onPress={()=>this.props.navigation.navigate('Dashboard')}>
                <Text style= {styles.buttonText} >Crear Cuenta</Text>
                 </TouchableOpacity>
            </View>

            <View style={styles.containera}>
                <Button title="Volver" onPress={() => this.props.navigation.goBack()} />
            </View>
            </ImageBackground>

        );
    }
}
export default SignUpScreen;

const styles = StyleSheet.create({
    containera: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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
      },
      accountText: {
        color: "#D8D8D8"
      },
      signupLinkText: {
        color: "#FFF",
        marginLeft: 5,
      },
    logo:{
        width:120,
        height:120,
        marginTop:60
    },
    buttonText1:{
        fontSize: 30,
    textAlign: 'center',
    color: 'white',
    fontFamily: Fonts.FjallaOne,
    opacity:0.9,
    marginTop:30,
    marginBottom:20

    },
    radio:{
        width: WIDTH-55,
        height:45,
        borderRadius:25,
        marginTop:30,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop:20, 
        paddingLeft:30,
       
    },

    logoContainer:{
        alignItems:'center'
    },
    logoText:{
        color:'white',
        fontSize:55,
        fontFamily: Fonts.FjallaOne,
        marginTop:50
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
        marginTop:70,
        borderRadius:25,
      },
    volver:{
        borderRadius:25,
      },

});
