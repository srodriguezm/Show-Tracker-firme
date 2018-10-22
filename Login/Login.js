import React, {Component} from 'react';
import { Text, View } from 'react-native';
class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
