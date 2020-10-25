/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import sp1 from '../../../../Image/media/temp/3.jpg';
import sp2 from '../../../../Image/media/temp/4.jpg';
import sp3 from '../../../../Image/media/temp/8.jpg';
import sp4 from '../../../../Image/media/temp/9.jpg';

export default class TopProduct extends Component {
  gotoDetail() {
    const { navigation } = this.props;
    navigation.push('Detail');
  }
  render() {
    const {
      container,
      titleContainer,
      title,
      body,
      productContainer,
      productImage,
      produceName,
      producePrice,
    } = styles;
    return (
      <View style={container}>
        <View style={titleContainer}>
          <Text style={title}>TOP PRODUCT</Text>
        </View>
        <View style={body}>
          <TouchableOpacity
            onPress={() => {
              this.gotoDetail();
            }}
            style={productContainer}>
            <Image source={sp1} style={productImage} />
            <Text style={produceName}>Vsmart Live</Text>
            <Text style={producePrice}>400$</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.gotoDetail();
            }}
            style={productContainer}>
            <Image source={sp2} style={productImage} />
            <Text style={produceName}>Samsung A20</Text>
            <Text style={producePrice}>250$</Text>
          </TouchableOpacity>
          <View style={{ height: 10, width }} />
          <TouchableOpacity
            onPress={() => {
              this.gotoDetail();
            }}
            style={productContainer}>
            <Image source={sp3} style={productImage} />
            <Text style={produceName}>Iphone 11 ProMax</Text>
            <Text style={producePrice}>400$</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.gotoDetail();
            }}
            style={productContainer}>
            <Image source={sp4} style={productImage} />
            <Text style={produceName}>Iphone 7Plus</Text>
            <Text style={producePrice}>250$</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const { width } = Dimensions.get('window');
const produtWidth = (width - 50) / 2;
const productImageHeight = (produtWidth / 361) * 452;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
  },
  titleContainer: {
    height: 50,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  title: {
    color: '#D3D3CF',
    fontSize: 20,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    paddingBottom: 10,
  },
  productContainer: {
    width: produtWidth,
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
  },
  productImage: {
    width: produtWidth,
    height: productImageHeight,
  },
  produceName: {
    marginVertical: 5,
    paddingLeft: 10,
    fontFamily: 'Avenir',
    color: '#662F90',
    fontWeight: '500',
  },
  producePrice: {
    marginBottom: 5,
    paddingLeft: 10,
    fontFamily: 'Avenir',
    color: '#662F90',
  },
});
