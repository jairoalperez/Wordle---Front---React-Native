import React from "react";
import {View, StyleSheet, Text, TouchableOpacity, TextInput, Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const Login = ({}) => {
    const navigation = useNavigation();

    const [log, setLog] = useState({
      username: '',
      pass: '',
  })

  const handleChangeText = (username, value) => {
    setLog({...log, [username]: value})
  }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                INICIAR SESION
            </Text>

            <TextInput
            style={styles.tinputce} 
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
                    //navigation.navigate('Hub')

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
                            console.log (data)
                            Alert.alert('Login Satisfactorio')
                            navigation.navigate('Hub')
                          })
                          }catch (error){
                            console.error(error)
                            console.log('no funciono fetch a llorar')
                            Alert.alert('Credenciales invalidas')
                          }

                    //console.log(log.username)
                    //console.log(log.pass)
                    
                }}
                style={styles.button}>
                    <Text style={styles.textbutton}>
                    Iniciar Sesion
                    </Text>
            </TouchableOpacity>

        </View>
    )
};

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

export default Login