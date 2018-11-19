import React, {Component} from 'react';
import {Tabs} from './router';

class FlipBoardScreen extends Component {
  static navigationOptions={
      header:null
  }
  render() {
    return <Tabs/>;
  }
}

export default FlipBoardScreen;
