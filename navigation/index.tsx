// In App.js in a new project

import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Introduction from '../screens/Introduction';
import Login from '../screens/Login';
import Detail from '../screens/Detail';
import 'react-native-gesture-handler';
import MyDrawer from './drawer';
const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Introduction" component={Introduction} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="MyDrawer" component={MyDrawer} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;