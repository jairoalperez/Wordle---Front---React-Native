import React from "react";
import {View, StyleSheet, Text, TouchableOpacity, TextInput, Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Verificacion = ({}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                VERIFICACION
            </Text>

            <Text style={styles.text}>
                Ingresar codigo de verificacion recibido en el correo
            </Text>

            <TextInput
            style={styles.tinput} 
            placeholder='Codigo'
            placeholderTextColor= 'gray'/>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Home')
                    Alert.alert('Registro Satisfactorio')
                    
                }}
                style={styles.button}>
                    <Text style={styles.textbutton}>
                    Confirmar
                    </Text>
            </TouchableOpacity>

        </View>
    )
};
export default Verificacion


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
      text:{
        fontSize: 16,
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