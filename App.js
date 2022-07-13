import React from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity, Alert} from "react-native"
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from './screens/Home'
import Login from './screens/Login'
import Register from "./screens/Register";
import Verificacion from "./screens/Verificacion";

const Stack = createNativeStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Register' component={Register}/>
          <Stack.Screen name='Verificacion' component={Verificacion}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}