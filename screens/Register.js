import React from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity, Alert, TextInput} from "react-native";
import { useState } from "react";


const Register = ({navigation}) => {

  const [user, setUser] = useState({
    name: '',
    user: '',
    email: '',
    pass: '',
    passc: ''
})

const handleChangeText = (name, value) => {
  setUser({...user, [name]: value})
}


    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                REGISTRARSE
            </Text>

            <TextInput
            style={styles.tinput1} 
            keyboardType='default'
            placeholder='Nombre Completo'
            placeholderTextColor= 'gray'
            onChangeText={(value) => handleChangeText('name', value)}/>

            <TextInput
            style={styles.tinput} 
            keyboardType='default'
            placeholder='Username'
            placeholderTextColor= 'gray'
            onChangeText={(value) => handleChangeText('user', value)}/>

            <TextInput
            style={styles.tinput} 
            keyboardType='email-address'
            placeholder='Correo Electronico'
            placeholderTextColor= 'gray'
            onChangeText={(value) => handleChangeText('email', value)}/>

            <TextInput
            secureTextEntry={true} 
            style={styles.tinput} 
            keyboardType='default'
            placeholder='Contraseña'
            placeholderTextColor= 'gray'
            onChangeText={(value) => handleChangeText('pass', value)}/>

            <TextInput
            secureTextEntry={true} 
            style={styles.tinput} 
            keyboardType='default'
            placeholder='Confirmar Contraseña'
            placeholderTextColor= 'gray'
            onChangeText={(value) => handleChangeText('passc', value)}/>

            <TouchableOpacity
                onPress={() => { 

                  if(user.pass === user.passc){
                    try {
                      fetch('https://backendwordleaja.herokuapp.com/register', {
                        method: 'POST',
                        headers: {
                        Accept: 'application/json',
                                'Content-Type': 'application/json'
                          },
                          body: JSON.stringify({
                              nombre: user.name,
                              username: user.user,
                              correo: user.email,
                              clave: user.pass
                            })
                          })
                          .then((resp) => resp.json())
                          .then((data) => {
                            console.log (data)
                            Alert.alert('Registro Satisfactorio')
                            navigation.navigate('Home')
                          })
                          }catch (error){
                            console.error(error)
                            console.log('no funciono fetch a llorar')
                            Alert.alert('No se pudo registrar este usuario')
                          }
                  }else{
                    Alert.alert('Las contraseñas deben coincidir')
                  }
                    
                }}
                style={styles.button}>
                    <Text style={styles.textbutton}>
                    Registrarse
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
      tinput1: {
        height: 40,
        marginTop: 50,
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
      textf: {
        fontSize: 15,
        color: "white",
        marginTop: 20,
      }


});

export default Register