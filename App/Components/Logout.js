import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.navigation.navigate('LoginPage');
  }

  render() {
    return <View></View>;
  }
}

export default Logout;
