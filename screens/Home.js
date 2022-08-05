import React from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity} from "react-native";

//Se importa el logo del juego
import logo from '../assets/logo.png'

const Home = ({navigation}) => {
    return (

      <View style={styles.container}>
      <Text style={styles.title}>
        Jairo&Adnan's
      </Text>

      <Image 
      source={logo}
      style={styles.image}
      />
    
      <TouchableOpacity
      onPress={() => {
        navigation.navigate('Login')
      }}
      style={styles.buttonlogin}>
        <Text style={styles.textbuttonl}>
          Iniciar Sesion
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => {
        navigation.navigate('Register')
      }}
      style={styles.buttonregister}>
        <Text style={styles.textbuttonr}>
          Registrarse
        </Text>
      </TouchableOpacity>
      
        </View>
    )
};
export default Home


/*---------------------------------------------------------------------------------------
------------------------------------- Estilos -------------------------------------------
---------------------------------------------------------------------------------------*/ 
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