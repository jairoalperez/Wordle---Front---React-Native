import React from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity} from "react-native";
import logo from '../assets/logo.png'


//Este es el hub en el que el usuario tendra sus respectivas opciones antes de jugar

const Hub = ({navigation}) => {
    return (

      <View style={styles.container}>

      <Image 
      source={logo}
      style={styles.image}
      />

      <TouchableOpacity
      onPress={() => {
        navigation.navigate('CrearRoom')
      }}
      style={styles.buttoncrear}>
        <Text style={styles.textbuttonc}>
          Crear Sala
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => {
        navigation.navigate('EntrarRoom')
      }}
      style={styles.buttonunir}>
        <Text style={styles.textbuttonu}>
          Unirse a Sala
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => {
        navigation.navigate('Home')
      }}
      style={styles.buttoncerrar}>
        <Text style={styles.textbuttoncer}>
          Cerrar Sesion
        </Text>
      </TouchableOpacity>
      
      </View>
    )
};
export default Hub


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
    image: {
      marginBottom: 40,  
      height: 184, 
      width: 368,
  
    },
    buttoncrear: {
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
    buttonunir: {
      backgroundColor: '#6baa64',
      padding: 10,
      borderRadius: 40,
      justifyContent: "center",
      alignItems: "center",
      height: 50, 
      width: 150,
    
    },
    buttoncerrar: {
      backgroundColor: 'darkred',
      padding: 10,
      borderRadius: 40,
      justifyContent: "center",
      alignItems: "center",
      height: 50, 
      width: 200,
      marginTop: 100,
    
    },

    textbuttonc: {
      fontSize: 20,
      
    },
  
    textbuttonu: {
      fontSize: 20,
      color: "white",
      
    },

    textbuttoncer: {
      fontSize: 20,
      color: "white",
      
    },

});