import React from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity, Alert, TextInput} from "react-native";


const Register = ({navigation}) => {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                REGISTRARSE
            </Text>

            <TextInput
            style={styles.tinput1} 
            keyboardType='default'
            placeholder='Nombre Completo'
            placeholderTextColor= 'gray'/>

            <TextInput
            style={styles.tinput} 
            keyboardType='default'
            placeholder='Username'
            placeholderTextColor= 'gray'/>

            <TextInput
            style={styles.tinput} 
            keyboardType='email-address'
            placeholder='Correo Electronico'
            placeholderTextColor= 'gray'/>

            <TextInput
            secureTextEntry={true} 
            style={styles.tinput} 
            keyboardType='default'
            placeholder='Contraseña'
            placeholderTextColor= 'gray'/>

            <TextInput
            secureTextEntry={true} 
            style={styles.tinput} 
            keyboardType='default'
            placeholder='Confirmar Contraseña'
            placeholderTextColor= 'gray'/>

            <TouchableOpacity
                onPress={() => { 
                    navigation.navigate('Verificacion')
                    Alert.alert('Ingresar codigo de verificacion recibido en el correo')
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