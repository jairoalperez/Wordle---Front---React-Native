import React, { useState } from "react";
import {View, StyleSheet, Text, TouchableOpacity, TextInput, Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";
import '../global'

//Screen que contendria la funcion para unirse a una room

const EntrarRoom = ({}) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Unirse a una Room
            </Text>


            <TextInput
            style={styles.tinput}
            keyboardType='numbers-and-punctuation'
            placeholder='ID Room'
            placeholderTextColor= 'gray'
            onChangeText={(value) => global.idroome = value}
            />

            <TouchableOpacity
                onPress={() => {
                  //navigation.navigate('Juego')
                  Alert.alert('En este momento esta funcion no ha sido implementada en el juego, pero lo sera pronto!')
                    
                }}
                style={styles.button}>
                    <Text style={styles.textbutton}>
                    Unirse
                    </Text>
            </TouchableOpacity>

        </View>
    )
};
export default EntrarRoom

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
      tinput: {
        height: 40,
        marginTop: 80,
        padding: 10,
        height: 50, 
        width: 250,
        borderRadius: 40,
        backgroundColor: "white",

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