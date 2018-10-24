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

import wall from '../img/drum.jpg'
import logo from '../img/logo.png'

const {width:WIDTH}= Dimensions.get('window')
class LoginScreen extends Component {

    static navigationOptions={
        header:null
    }

    render() {
        return (
            <ImageBackground source={wall} style={styles.backgroundContainer} >

            
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

                  <TouchableOpacity style = {styles.buttonContainer} onPress={()=>this.props.navigation.navigate('Dashboard')}>
                <Text style= {styles.buttonText}LOGIN >LOGIN</Text>
                 </TouchableOpacity>
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
            <View style={styles.containera}>
                <Button title="Volver a inicio" onPress={() => this.props.navigation.goBack()} />
            </View>
            </ImageBackground>
            
        );
    }
    
}
export default LoginScreen;

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
        fontSize:18
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
        fontSize:35,
        fontWeight:'500',
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
    fontWeight:'bold',
    opacity:0.9,
    },

    buttonContainer: {
        backgroundColor: '#800080',
        paddingVertical: 15,
        marginTop:30
      },

});
