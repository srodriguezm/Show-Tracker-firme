import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity, Image, Linking,} from 'react-native';
import {Fonts} from '../src/util/Fonts';
import Scroll from './Scroll';
import ProfileBar from './ProfileBar';
class ProfileScreen extends Component {
  static navigationOptions = {
      header: null
  }
    render() {
        return (
          <ImageBackground source={require('../img/profileBackGround.jpg')} style={styles.container}>
          <Scroll>
            <View style={styles.contentContainer}>
              <View style={styles.profilePicWrap}>
                <Image style={styles.profilePic} source={require('../img/profile.jpg')}/>
              </View>
              <Text style={styles.name}>PEZ KOI</Text>
              <Text style={styles.profession}>CANTANTE DE REGGAETON</Text>
              <Text style={styles.resume}>¡Cantante de música urbana en proceso, sigueme y escucha mi música!{"\n"}
              ¡Dios bendiga el Reggaeton... AMEN!</Text>
              <ProfileBar/>
              <Text style={styles.contacto}>Redes sociales y contacto:</Text>
              <View style={styles.bar}>
                <TouchableOpacity style={styles.buttonContainerTransparent} onPress={()=> Linking.openURL('https://www.facebook.com/pez.koi.737')} >
                  <Image style={styles.redes} source={require('../img/face.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainerTransparent} onPress={()=> Linking.openURL('https://www.instagram.com/juanmarpo/?hl=es-la')} >
                  <Image style={styles.redes} source={require('../img/insta.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainerTransparent} onPress={()=> Linking.openURL('https://twitter.com/LaReinaDelFlow')} >
                  <Image style={styles.redes} source={require('../img/twitter.png')}/>
                </TouchableOpacity>
              </View>
              <Text style={styles.contacto}>Música y enlaces:</Text>
              <View style={styles.bar}>
                <TouchableOpacity style={styles.buttonContainerTransparent} onPress={()=> Linking.openURL('https://open.spotify.com/album/1ixtM0wQsdI2c4H0ZK3LgI?si=JnKqqXsFQmaHEGCWTQ0eYQ')} >
                  <Image style={styles.musica} source={require('../img/spotify.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainerTransparent} onPress={()=> Linking.openURL('https://www.deezer.com/album/71373902?utm_source=deezer&utm_content=album-71373902&utm_term=2371636288_1542595664&utm_medium=web')} >
                  <Image style={styles.musica2} source={require('../img/deezer.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainerTransparent} onPress={()=> Linking.openURL('https://soundcloud.com/pezkoi')} >
                  <Image style={styles.musica} source={require('../img/soundCloud.png')}/>
                </TouchableOpacity>
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
export default ProfileScreen;

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
  },
  resume: {
    marginTop:10,
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    fontFamily: Fonts.MerriweatherSans,
    marginBottom:10,
  },
  contacto: {
    marginTop:10,
    fontSize: 18,
    textAlign: 'left',
    color: 'white',
    fontFamily: Fonts.MerriweatherSans,
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
