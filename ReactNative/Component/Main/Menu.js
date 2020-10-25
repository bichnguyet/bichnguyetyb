/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import profileIcon from '../../Image/media/temp/profile.png';

export default class Oderhistory extends Component {
  constructor(props) {
    super(props);
    this.state = {isLogedIn: true};
  }
  gotoAuthentication() {
    const {navigation} = this.props;
    navigation.navigate('Authentication');
  }
  gotoChangeinfo() {
    const {navigation} = this.props;
    navigation.push('Changeinfo');
  }
  gotoOderhistory() {
    const {navigation} = this.props;
    navigation.push('Oderhistory');
  }

  render() {
    const {
      container,
      profile,
      btnStyle,
      btnText,
      btnSignInStyle,
      btnTextSignIn,
      loginContainer,
      username,
    } = styles;
    const LoginJSX = (
      <View style={loginContainer}>
        <Text style={username}>Nguyễn Thị Bích Nguyệt</Text>
        <View>
          <TouchableOpacity style={btnSignInStyle}  onPress={() => this.gotoOderhistory()}>
            <Text style={btnTextSignIn}>Order History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={btnSignInStyle} onPress={() => this.gotoChangeinfo()}>
            <Text style={btnTextSignIn}>Change Info</Text>
          </TouchableOpacity>
          <TouchableOpacity style={btnSignInStyle}>
            <Text style={btnTextSignIn}>Sign out</Text>
          </TouchableOpacity>
        </View>
        <View />
      </View>
    );
    const LogoutJSX = (
      <View style={{flex: 1}}>
        <TouchableOpacity style={btnStyle} onPress={() => this.gotoAuthentication()}>
          <Text style={btnText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
    const MainJSX = this.state.isLogedIn ? LoginJSX : LogoutJSX ;
    return (
      <View style={styles.container}>
        <Image source={profileIcon} style={profile} />
        {MainJSX}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34B089',
    borderRightWidth: 3,
    borderColor: '#fff',
    alignItems: 'center',
  },
  profile: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginVertical: 25,
  },
  btnStyle: {
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 70,
  },
  btnText: {
    color: '#34B089',
    fontSize: 20,
  },
  btnSignInStyle: {
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 8,
    width: 230,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
  },
  btnTextSignIn: {
    color: '#34B089',
    fontSize: 15,
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  username: {
    color: '#fff',
    fontFamily: 'Avenir',
    fontSize: 20,
    marginBottom: -50,
    marginTop: 15,
  },
});
