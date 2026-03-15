import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import EggType from './Screens/EggType';
import SoftBoiledEgg from './Screens/SoftBoiledEgg';
import HardBoiledEgg from './Screens/HardBoiledEgg';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EggType" component={EggType} />
        <Stack.Screen name="SoftBoiledEgg" component={SoftBoiledEgg} />
        <Stack.Screen name="HardBoiledEgg" component={HardBoiledEgg} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
