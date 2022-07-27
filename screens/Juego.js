import { color } from "@rneui/base";
import React from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity} from "react-native";
import logo from '../assets/logo.png'

const Block = ({letter}) => (

    <View style={styles.guessSquare}>
        <Text style={styles.guessLetter}>{letter}</Text>
    </View>
)

const GuessRow = ({ guess }) => {
  const letters = guess.split("")

    return(
    <View style={styles.guessRow}>
      <Block letter={letters[0]} />
      <Block letter={letters[1]} />
      <Block letter={letters[2]} />
      <Block letter={letters[3]} />
      <Block letter={letters[4]} />
    </View>
  )
    }

  const KeyboardRow = ({ 
    letters,
    onKeyPress,
    }) => (
    <View style={styles.keyboardRow}>
      {letters.map(letter => (
        <TouchableOpacity
        onPress={() => onKeyPress(letter)}>
          <View style={styles.key}>
            <Text style={styles.keyLetter}>{letter}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )

    const Keyboard = ({ onKeyPress }) => {
    const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
    const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
    const row3 = ["Z", "X", "C", "V", "B", "N", "M", "⌫"]
  
    return (
        <View style={styles.keyboard}>
        <KeyboardRow letters={row1} onKeyPress={onKeyPress}/>
        <KeyboardRow letters={row2} onKeyPress={onKeyPress}/>
        <KeyboardRow letters={row3} onKeyPress={onKeyPress}/>
        <View style={styles.keyboardRow}>
        <TouchableOpacity onPress={() => onKeyPress("ENTER")}>
          <View style={styles.key}>
            <Text style={styles.keyLetter}>ENTER</Text>
          </View>
        </TouchableOpacity>
      </View>
        </View>
    )
}

const Juego = ({navigation}) => {

  const [guess, setGuess] = React.useState("")

    const handleKeyPress = (letter) => {
      setGuess(guess + letter)
    }
    return ( 

      <View style={styles.container}>

        <View style={styles.containerj}>
        <GuessRow guess={guess} />
        <GuessRow guess="" />
        <GuessRow guess="" />
        <GuessRow guess="" />
        <GuessRow guess="" />
        <GuessRow guess="" />
        </View>
        
        <Keyboard onKeyPress={handleKeyPress}/>
        </View>

    

    )
};
export default Juego

const styles = StyleSheet.create({

    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "lightgreen",

      
  
    },
    
    containerj: {
        marginBottom: 40,
    },

    guessRow: {
        flexDirection: "row",
        justifyContent: "center",
      },
      guessSquare: {
        borderColor: "white",
        backgroundColor : "black",
        borderWidth: 2,
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
      },
      guessLetter: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },

    keyboard: { 
    flexDirection: "column" ,
    },

    keyboardRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
    },

    key: {
        backgroundColor: "white",
        padding: 10,
        margin: 3,
        borderRadius: 5,
    },

    keyLetter: {
        fontWeight: "500",
        fontSize: 15,
    },
    

});