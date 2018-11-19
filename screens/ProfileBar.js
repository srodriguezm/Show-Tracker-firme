import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity, Image} from 'react-native';
import {Fonts} from '../src/util/Fonts';
class ProfileBar extends Component {
  render() {
      return (
        <View style={styles.bar}>

          <View style={[styles.barItem, styles.barSeparator]}>
            <Text style={styles.barTop}>12K</Text>
            <Text style={styles.barBottom}>Followers</Text>
          </View>

          <View style={styles.barItem}>
            <Text style={styles.barTop}>7</Text>
            <Text style={styles.barBottom}>Canciones</Text>
          </View>

        </View>
      );
    }
}
export default ProfileBar;
const styles = StyleSheet.create({
  bar:{
    backgroundColor:'rgba(172,0,0,0.8)',
    flexDirection:'row',
    borderRadius:25,
    alignItems: 'center',
  },
  barSeparator:{
    borderRightWidth: 4,
    borderRightColor:'#fff',
  },
  barItem:{
    flex: 1,
    padding: 18,
    width: null,
    alignSelf:'stretch',
    alignItems: 'center',
  },
  barTop:{
    color: '#fff',
    fontSize: 16,
    fontFamily: Fonts.MerriweatherSans,
  },
  barBottom:{
    color:'#000',
    fontSize:14,
    fontFamily: Fonts.MerriweatherSans,
  }
});
