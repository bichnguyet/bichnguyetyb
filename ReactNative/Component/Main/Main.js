/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/**npm install --save react-native-drawer */
import React, {Component} from 'react';
import {Button, Text, View, SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Drawer from 'react-native-drawer';
import Menu from './Menu';
import Shop from './Shop/Shop';

export default class Main extends Component {
  gotoAuthentication() {
    const {navigation} = this.props;
    navigation.push('Authentication');
  }
  gotoChangeinfo() {
    const {navigation} = this.props;
    navigation.push('Changeinfo');
  }
  gotoOderhistory() {
    const {navigation} = this.props;
    navigation.push('Oderhistory');
  }

  openControlPanel = () => {
    this._drawer.open();
  };
  render() {
    const {navigation} = this.props;
    return (
      <Drawer
        ref={(ref) => (this._drawer = ref)}
        openDrawerOffset={0.3}
        tapToClose={true}
        content={<Menu navigation={navigation} />}>
        <Shop open={this.openControlPanel.bind(this)} navigation={navigation} />
      </Drawer>
    );
  }
}
