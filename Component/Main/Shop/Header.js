import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

import icLogo from '../../../Image/media/icons/ic_logo.png';
import icMenu from '../../../Image/media/icons/ic_menu.png';

const {height,width} = Dimensions.get('window');
class Header extends Component {
  render() {
    const {wrapper, row1, textInput, iconStyle, titleStyle} = styles;
    return (
      <View style={wrapper}>
        <View style={row1}>
          <TouchableOpacity onPress={this.props.op}>
            <Image source={icMenu} style={iconStyle} />
          </TouchableOpacity>
          <Text style={titleStyle}>Phone Store</Text>
          <Image source={icLogo} style={iconStyle} />
        </View>
        <TextInput style={textInput} placeholder="What do you want to buy?" />
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    height: height / 7.5,
    backgroundColor: '#34B089',
    padding: 10,
    justifyContent: 'space-around',
  },
  row1: {flexDirection: 'row', justifyContent: 'space-between', margin:10, marginBottom:20},
  textInput: {height: height / 18,  backgroundColor: '#FFF', marginBottom:10},
  titleStyle: {padding:5, color: '#FFF', fontFamily: 'Avenir', fontSize: 22},
  iconStyle: {width: 30, height: 30},
});
