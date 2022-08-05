import React from "react";
import {View, StyleSheet, Text, TouchableOpacity, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";
import "../global"

//Screen que contiene las opciones de crear una room

const CrearRoom = ({}) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Crear Room
            </Text>

            <TextInput
            style={styles.tinput1}
            keyboardType='numbers-and-punctuation'
            placeholder='ID Room'
            placeholderTextColor= 'gray'
            onChangeText={(value) => global.idroomc = value}
            />

            <TextInput
            style={styles.tinput}
            keyboardType='numbers-and-punctuation'
            placeholder='Tiempo (Segundos)'
            placeholderTextColor= 'gray'
            onChangeText={(value) => global.time = value}
            />

            <TextInput
            style={styles.tinput}
            keyboardType='numbers-and-punctuation'
            placeholder='Numero de Rondas'
            placeholderTextColor= 'gray'
            onChangeText={(value) => global.rondas = value}
            />

            <TouchableOpacity
                onPress={() => {
                    
                  navigation.navigate('Juego')
                  
                }}
                style={styles.button}>
                    <Text style={styles.textbutton}>
                    Crear Room
                    </Text>
            </TouchableOpacity>

        </View>
    )
};
export default CrearRoom


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
      tinput1: {
        height: 40,
        marginTop: 80,
        padding: 10,
        height: 50, 
        width: 250,
        borderRadius: 40,
        backgroundColor: "white",

      },
      tinput: {
        height: 40,
        marginTop: 12,
        padding: 10,
        height: 50, 
        width: 250,
        borderRadius: 40,
        backgroundColor: "white"
        
      },
      button: {
        backgroundColor: "#6baa64",
        padding: 10,
        marginTop: 30,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        height: 50, 
        width: 150,
      
      },
      textbutton: {
        fontSize: 20,
        color: "white",
        
      },

});

