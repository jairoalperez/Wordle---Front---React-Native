<<<<<<< Updated upstream
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
=======
import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from './screens/Home'
import Login from './screens/Login'
import Register from "./screens/Register";
import Verificacion from "./screens/Verificacion";
import Hub from "./screens/Hub"
import Juego from "./screens/Juego"

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
          <Stack.Screen name='Hub' component={Hub}/>
          <Stack.Screen name='Juego' component={Juego}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}
>>>>>>> Stashed changes
