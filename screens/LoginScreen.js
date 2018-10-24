import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class LoginScreen extends Component {
  static navigationOptions = {
      header: null
  }
    render() {
        return (
            <View style={styles.containera}>
                <Button title="go back to login screen" onPress={() => this.props.navigation.goBack()} />
                <Button title="Ingresar" onPress={()=>this.props.navigation.navigate('Dashboard')} />
            </View>
        );
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    containera: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
