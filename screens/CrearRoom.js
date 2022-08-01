import React from "react";
import {View, StyleSheet, Text, TouchableOpacity, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";
import "../global"
import { ActivityIndicator, FlatList } from "react-native-web";
import { useState } from "react";

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
            //onChangeText={(value) => global.idroomc = value}
            onChangeText={(value) => handleChangeText('idroom', value)}
            />

            <TextInput
            style={styles.tinputp}
            keyboardType='numbers-and-punctuation'
            placeholder='Tiempo (Segundos Max: 200)'
            placeholderTextColor= 'gray'
            //onChangeText={(value) => global.time = value}
            onChangeText={(value) => handleChangeText('time', value)}
            />

            <TextInput
            style={styles.tinputp}
            keyboardType='numbers-and-punctuation'
            placeholder='Numero de Rondas'
            placeholderTextColor= 'gray'
            //onChangeText={(value) => global.rondas = value}
            onChangeText={(value) => handleChangeText('rondas', value)}
            />

            <TouchableOpacity
                onPress={() => {
                    //navigation.navigate('Juego')

                    /*try{fetch('https://backendwordleaja.herokuapp.com/create-room', {
                      method: 'POST',
                      headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({
                        id_room: room.idroom,
                        rounds: room.rondas,
                        tiempo: room.time,
                        author: global.autor
                      })
                    })
                    }catch (error){
                      console.error(error)
                      console.log('no funciono fetch a llorar')
                    }*/
                    
                    global.idroomc = room.idroom
                    //navigation.navigate('Juego')
                    
                    var idr = null
                    var r = null
                    var t = null

                    /*try {
                      const response = fetch(
                        'https://backendwordleaja.herokuapp.com/search-room/1', {method: 'GET'}
                      )
                      .then((respuesta) => respuesta.json())
                      .then((data) => 
                      {
                      
                      const datos = data
                      console.log(datos)
                      //console.log('variable global de ronda: '+global.idroomc)

                      //const datos = data.rows[0]
                      //console.log('los datos del json son: '+datos.idroom+', '+datos.rounds+', '+datos.tiempo)
                      })
                    } catch (error) {
                      console.error(error)
                      console.log('Error con el fetch');
                    }*/



                    try {
                      const response = fetch(
                        'https://backend-wordle-axel.herokuapp.com/buscar-room/7', {method: 'GET'} 
                      )
                      .then((respuesta) => respuesta.json())
                      .then((data) => 
                      {
                      
                      //const datos = data
                      console.log(data)
                      //console.log('variable global de ronda: '+global.idroomc)

                      //const datos = data.rows[0]
                      //console.log('los datos del json son: '+datos.idroom+', '+datos.rounds+', '+datos.tiempo)
                      })
                    } catch (error) {
                      console.error(error)
                      console.log('Error con el fetch');
                    }





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

