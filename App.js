/**npm install @react-navigation/native @react-navigation/stack */
/**npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '../ReactNative/Component/Main/Main';
import Changeinfo from '../ReactNative/Component/Changeinfo/Changeinfo';
import Authentication from '../ReactNative/Component/Authentication/Authentication';
import Oderhistory from '../ReactNative/Component/Oderhistory/Oderhistory';
import Detail from './Component/Main/Shop/Detail/Detail';
import ListProduct from './Component/Main/Shop/ListProduct/ListProduct';

const Stack = createStackNavigator();
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Authentication" component={Authentication} />
          <Stack.Screen name="Changeinfo" component={Changeinfo} />
          <Stack.Screen name="Oderhistory" component={Oderhistory} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="ListProduct" component={ListProduct} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
