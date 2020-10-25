/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { height, width } = Dimensions.get('window');
import bannerImage from '../../../../Image/media/temp/banner.jpg';

export default class Collection extends Component {
  render() {
    const { wrapper, textStyle, imageStyle } = styles;
    return (
      <View style={wrapper}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={textStyle}>SPRING COLLECTION</Text>
        </View>
        <View style={{ flex: 4 }}>
          <Image source={bannerImage} style={imageStyle} />
        </View>
      </View>
    );
  }
}

const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;

const styles = StyleSheet.create({
  wrapper: {
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
    margin: 5,
  },
  imageStyle: {
    height: imageHeight,
    width: imageWidth,
  },
});
