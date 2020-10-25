/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/*npm i --save react-native-swiper@next */
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import littleIcon1 from '../../../../Image/media/temp/16.jpg';
import littleIcon2 from '../../../../Image/media/temp/15.jpg';
import littleIcon3 from '../../../../Image/media/temp/17.jpg';
import littleIcon4 from '../../../../Image/media/temp/18.jpg';

const { width, height } = Dimensions.get('window');

export default class Category extends Component {
  gotoListproduct() {
    const { navigation } = this.props;
    const { open } = this.props;
    navigation.push('ListProduct');
  }
  render() {
    const { types} = this.props;
    const { wrapper, textStyle, imageStyle } = styles;
    return (
      <View style={wrapper}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={textStyle}>LIST COLLECTION</Text>
        </View>
        <View style={{ flex: 4 }}>
          <Swiper>
            
              <TouchableOpacity
              onPress={() => {
                this.gotoListproduct();
              }}>
              <Image source={littleIcon1} style={imageStyle} />
            </TouchableOpacity>
              <TouchableOpacity
              onPress={() => {
                this.gotoListproduct();
              }}>
              <Image source={littleIcon2} style={imageStyle} />
            </TouchableOpacity>
              <TouchableOpacity
              onPress={() => {
                this.gotoListproduct();
              }}>
              <Image source={littleIcon3} style={imageStyle} />
            </TouchableOpacity>
              <TouchableOpacity
              onPress={() => {
                this.gotoListproduct();
              }}>
              <Image source={littleIcon4} style={imageStyle} />
            </TouchableOpacity>
            
          </Swiper>
        </View>
      </View>
    );
  }
}
//933 x 465
const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;

const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.33,
    width: width - 20,
    backgroundColor: '#FFF',
    margin: 5,
    marginLeft: 10,
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
  },
  textStyle: {
    fontSize: 20,
    color: '#AFAEAF',
  },
  imageStyle: {
    height: imageHeight,
    width: imageWidth,
  },
});
