import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

import icBack from '../../Image/media/icons/back_white.png';
import icLogo from '../../Image/media/icons/ic_logo.png';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {isSignIn: true};
  }
  signIn() {
    this.setState({isSignIn: true});
  }
  signUp() {
    this.setState({isSignIn: false});
  }
  goback() {
    const {navigation} = this.props;
    navigation.pop();
  }
  render() {
    const {
      row1,
      iconStyle,
      titleStyle,
      container,
      controlStyle,
      signInStyle,
      signUpStyle,
      activeStyle,
      inactiveStyle,
      inputStyle,
      bigButton,
      buttonText,
    } = styles;

    const SignInJSX = (
      <View>
        <TextInput style={inputStyle} placeholder="Enter your email" />
        <TextInput style={inputStyle} placeholder="Enter your password" />
        <TouchableOpacity style={bigButton}>
          <Text style={buttonText}>SIGN IN NOW</Text>
        </TouchableOpacity>
      </View>
    );

    const SignUpJSX = (
      <View>
        <TextInput style={inputStyle} placeholder="Enter your name" />
        <TextInput style={inputStyle} placeholder="Enter your email" />
        <TextInput style={inputStyle} placeholder="Enter your password" />
        <TextInput style={inputStyle} placeholder="Re-enter your password" />
        <TouchableOpacity style={bigButton}>
          <Text style={buttonText}>SIGN UP NOW</Text>
        </TouchableOpacity>
      </View>
    );
    const {isSignIn} = this.state;
    const mainJSX = isSignIn ? SignInJSX : SignUpJSX;
    return (
      <View style={container}>
        <View style={row1}>
          <TouchableOpacity onPress={()=> {this.goback()}}>
            <Image source={icBack} style={iconStyle} />
          </TouchableOpacity>
          <Text style={titleStyle}>Phone Store</Text>
          <Image source={icLogo} style={iconStyle} />
        </View>
        {mainJSX}
        <View style={controlStyle}>
          <TouchableOpacity
            style={signInStyle}
            onPress={this.signIn.bind(this)}>
            <Text style={isSignIn ? activeStyle : inactiveStyle}>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={signUpStyle}
            onPress={this.signUp.bind(this)}>
            <Text style={!isSignIn ? activeStyle : inactiveStyle}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3EBA77',
    padding: 20,
    justifyContent: 'space-between',
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleStyle: {color: '#FFF', fontFamily: 'Avenir', fontSize: 30},
  iconStyle: {width: 30, height: 30},
  controlStyle: {
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  inactiveStyle: {
    color: '#D7D7D7',
  },
  activeStyle: {
    color: '#3EBA77',
  },
  signInStyle: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 15,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    marginRight: 1,
  },
  signUpStyle: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    alignItems: 'center',
    flex: 1,
    marginLeft: 1,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  },
  inputStyle: {
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 20,
    paddingLeft: 30,
  },
  bigButton: {
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Avenir',
    color: '#fff',
    fontWeight: '400',
  },
});