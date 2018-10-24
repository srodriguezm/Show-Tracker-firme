import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class LoginScreen extends Component {

    render() {
        return (
            <View style={styles.containera}>
                <Button title="go back to login screen" onPress={() => this.props.navigation.goBack()} />
                <Button title="go back to login screen" onPress={() => this.props.navigation.popToTop()} />
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
