import React from "react";
import {View, StyleSheet, Text, TouchableOpacity, TextInput, Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const Login = ({}) => {
    const navigation = useNavigation();

    //Se declara el state log con los parametros del username y password que recibiran de los text input
    const [log, setLog] = useState({
      username: '',
      pass: '',
  })

  //Se utiliza para setear los parametros del state log
  const handleChangeText = (username, value) => {
    setLog({...log, [username]: value})
  }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                INICIAR SESION
            </Text>

            <TextInput
            style={styles.tinputu} 
            keyboardType='default'
            placeholder='Username'
            placeholderTextColor= 'gray'
            onChangeText={(value) => handleChangeText('username', value)}/>

            <TextInput
            secureTextEntry={true} 
            style={styles.tinputp}
            keyboardType='default'
            placeholder='Contraseña'
            placeholderTextColor= 'gray'
            onChangeText={(value) => handleChangeText('pass', value)}/>

            <TouchableOpacity
                onPress={() => {

                    //Fetch que se comunica con el servidor para el login, envia los dos parametros, luego recibe una 
                    //respuesta que puede ser 'G' u 'F', para indicar si se logro la autenticacion.
                    try {
                      fetch('https://backendwordleaja.herokuapp.com/login', {
                        method: 'POST',
                        headers: {
                        Accept: 'application/json',
                                'Content-Type': 'application/json'
                          },
                          body: JSON.stringify({
                              username: log.username,
                              password: log.pass
                            })
                          })
                          .then((resp) => resp.json())
                          .then((data) => {
                            if (data == 'G') {
                              Alert.alert('Login Satisfactorio')
                              navigation.navigate('Hub')
                            }else {
                              Alert.alert('Credenciales Incorrectas')
                            }
                          })
                          }catch (error){
                            console.error(error)
                            console.log('no funciono fetch a llorar')
                          }

                }}
                style={styles.button}>
                    <Text style={styles.textbutton}>
                    Iniciar Sesion
                    </Text>
            </TouchableOpacity>

        </View>
    )
};


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
      tinputu: {
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

export default Login