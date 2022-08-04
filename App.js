import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from './screens/Home'
import Login from './screens/Login'
import Register from "./screens/Register";
import Verificacion from "./screens/Verificacion";
import Hub from "./screens/Hub"
import Juego from "./screens/Juego"
import CrearRoom from "./screens/CrearRoom";
import EntrarRoom from "./screens/EntrarRoom";

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
          <Stack.Screen name='EntrarRoom' component={EntrarRoom}/>
          <Stack.Screen name='CrearRoom' component={CrearRoom}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}
