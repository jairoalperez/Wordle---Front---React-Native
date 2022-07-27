import { color } from "@rneui/base";
import React from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity} from "react-native";
import logo from '../assets/logo.png'

const Hub = ({navigation}) => {
    return (

      <View style={styles.container}>

      <Image 
      source={logo}
      style={styles.image}
      />

      <TouchableOpacity
      onPress={() => {
        navigation.navigate('Juego')
      }}
      style={styles.buttonlogin}>
        <Text style={styles.textbuttonl}>
          Jugar
        </Text>
      </TouchableOpacity>
      
      </View>
    )
};
export default Hub

const styles = StyleSheet.create({

    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "lightgreen",
  
    },
    title: {
      fontSize: 40,
      marginBottom: 50,
      fontWeight: 'bold',
      color: '#6baa64'
  
    },
    image: {
      marginBottom: 40,  
      height: 184, 
      width: 368,
  
    },
    buttonlogin: {
      backgroundColor: "white",
      padding: 10,
      marginTop: 80,
      marginBottom: 10,
      borderRadius: 40,
      justifyContent: "center",
      alignItems: "center",
      height: 50, 
      width: 150,
    
    },
    buttonregister: {
      backgroundColor: '#6baa64',
      padding: 10,
      borderRadius: 40,
      justifyContent: "center",
      alignItems: "center",
      height: 50, 
      width: 150,
    
    },
    textbuttonl: {
      fontSize: 20,
      
    },
  
    textbuttonr: {
      fontSize: 20,
      color: "white",
      
    },

});