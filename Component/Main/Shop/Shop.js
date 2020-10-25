/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable prettier/prettier */
/**npm install react-native-tab-navigator --save */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Search from './Search/Search';
import Cart from './Cart/Cart';
import Header from './Header';

import homeIconS from '../../../Image/media/icons/home.png';
import homeIcon from '../../../Image/media/icons/home0.png';
import cartIconS from '../../../Image/media/icons/cart.png';
import cartIcon from '../../../Image/media/icons/cart0.png';
import searchIconS from '../../../Image/media/icons/search.png';
import searchIcon from '../../../Image/media/icons/search0.png';
import contactIconS from '../../../Image/media/icons/contact.png';
import contactIcon from '../../../Image/media/icons/contact0.png';
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Home',
      types: [] ,
    };
  }
  UNSAFE_componentDidMount() {
    fetch('http://192.168.0.101/api/')
    .then(res => res.json())
    .then(resJSON => {
      console.log(resJSON);
        const { type } = resJSON;
        this.setState({ types: type });
        console.log("Loooooooooooooi");
    })
    .catch((er) => {
      console.log("Loooooooooooooi");
    });
}
  openMenu() {
    const { open } = this.props;
    open();
  }
  render() {
    const { types, selectedTab } = this.state;
    const { navigation } = this.props;
    
    return (
      
      <View style={{ flex: 1 }}>
        <View>
          <Header op={this.openMenu.bind(this)} />
        </View>
        <TabNavigator>
          <TabNavigator.Item
            selected={selectedTab === 'Home'}
            title="Home"
            renderIcon={() => (
              <Image source={homeIcon} style={styles.iconStyle} />
            )}
            renderSelectedIcon={() => (
              <Image source={homeIconS} style={styles.iconStyle} />
            )}
            selectedTitleStyle={{ color: '#000' }}
            onPress={() => this.setState({ selectedTab: 'Home' })}>
            <Home types={types} navigation={navigation} />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={selectedTab === 'Cart'}
            title="Cart"
            renderIcon={() => (
              <Image source={cartIcon} style={styles.iconStyle} />
            )}
            renderSelectedIcon={() => (
              <Image source={cartIconS} style={styles.iconStyle} />
            )}
            selectedTitleStyle={{ color: '#000' }}
            onPress={() => this.setState({ selectedTab: 'Cart' })}>
            <Cart navigation={navigation} />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={selectedTab === 'Search'}
            title="Search"
            renderIcon={() => (
              <Image source={searchIcon} style={styles.iconStyle} />
            )}
            renderSelectedIcon={() => (
              <Image source={searchIconS} style={styles.iconStyle} />
            )}
            selectedTitleStyle={{ color: '#000' }}
            onPress={() => this.setState({ selectedTab: 'Search' })}>
            <Search navigation={navigation} />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'Contact'}
            title="Contact"
            renderIcon={() => (
              <Image source={contactIcon} style={styles.iconStyle} />
            )}
            renderSelectedIcon={() => (
              <Image source={contactIconS} style={styles.iconStyle} />
            )}
            selectedTitleStyle={{ color: '#000' }}
            onPress={() => this.setState({ selectedTab: 'Contact' })}>
            <Contact />
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconStyle: {
    width: 20,
    height: 20,
  },
});