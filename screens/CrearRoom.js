import React, { useState } from "react";
import {View, StyleSheet, Text, TouchableOpacity, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";
import "../global"

const CrearRoom = ({}) => {
    const navigation = useNavigation();

    var [room, setRoom] = useState({
        idroom: 0,
        time: 0,
        rondas: 0,
    })

    const handleChangeText = (idroom, value) => {
        setRoom({...room, [idroom]: value})
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Crear Room
            </Text>


            <TextInput
            style={styles.tinputce}
            keyboardType='numbers-and-punctuation'
            placeholder='ID Room'
            placeholderTextColor= 'gray'
            onChangeText={(value) => global.idroomc = value}
            //onChangeText={(value) => handleChangeText('idroom', value)}
            />

            <TextInput
            style={styles.tinputp}
            keyboardType='numbers-and-punctuation'
            placeholder='Tiempo (Segundos Max: 200)'
            placeholderTextColor= 'gray'
            onChangeText={(value) => global.time = value}
            //onChangeText={(value) => handleChangeText('time', value)}
            />

            <TextInput
            style={styles.tinputp}
            keyboardType='numbers-and-punctuation'
            placeholder='Numero de Rondas'
            placeholderTextColor= 'gray'
            onChangeText={(value) => global.rondas = value}
            //onChangeText={(value) => handleChangeText('rondas', value)}
            />

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Juego')
                    console.log(global.idroomc)
                    console.log(global.time)
                    console.log(global.rondas)
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
      tinputce: {
        height: 40,
        marginTop: 80,
        padding: 10,
        height: 50, 
        width: 250,
        borderRadius: 40,
        backgroundColor: "white",

      },
      tinputp: {
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

