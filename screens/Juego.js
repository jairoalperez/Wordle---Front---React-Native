import { color } from "@rneui/base";
import React from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity, Button} from "react-native";



const Block = ({
  index,
  guess,
  word,
  guessed,
  }) => {
   
    const letter = guess[index]
    const wordLetter = word[index]
    const blockStyles = [styles.guessSquare]
    const textStyles = [styles.guessLetter]

    if (letter === wordLetter && guessed) {
      blockStyles.push(styles.guessCorrect)
      textStyles.push(styles.guessedLetter)
    } else if (word.includes(letter) && guessed) {
      blockStyles.push(styles.guessInWord)
      textStyles.push(styles.guessedLetter)
    } else if (guessed) {
      blockStyles.push(styles.guessNotInWord)
      textStyles.push(styles.guessedLetter)
    } 

    return (
      <View style={blockStyles}>
        <Text style={textStyles}>{letter}</Text>
      </View>
    )

  }

const GuessRow = ({ 
  guess,
  word,
  guessed,
  }) => {

    return(
      <View style={styles.guessRow}>
      <Block index={0} guess={guess} word={word} guessed={guessed} />
      <Block index={1} guess={guess} word={word} guessed={guessed} />
      <Block index={2} guess={guess} word={word} guessed={guessed} />
      <Block index={3} guess={guess} word={word} guessed={guessed} />
      <Block index={4} guess={guess} word={word} guessed={guessed} />
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
    const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"]
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



const words = ["APODO", "ADIOS", "BAÑOS", "BESOS", "CACAO", "CEJAS", "CLAVO","CALMA", "DEBER", "DADOS", "DOTES", "EMOJI", "ERIZO", "FALLO",
               "FUGAS", "GANAS", "GIROS", "HECHO", "HORNO", "IDEAS", "ISLAS","JEFES", "JOYAS", "KURDA", "LABIA", "LATAS", "MAGOS", "METAS",
               "NIÑOS", "NUBES", "OBRAS", "OVULO", "PELOS", "PLANA", "QUEMO","QUITO", "RABIA", "RATAS", "SALTO", "SOÑAR", "TACOS", "TUBOS",
               "URNAS", "VACAS", "VOLAR", "WIKIS", "YOGUR", "ZORRO", "ZONAS"]


const defaultGuess = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
}

const Juego = ({navigation}) => {

  const [activeWord, setActiveWord] = React.useState(words[0])
  const [guessIndex, setGuessIndex] = React.useState(0)
  const [guesses, setGuesses] = React.useState(defaultGuess)
  const [gameComplete, setGameComplete] = React.useState(false)

    const handleKeyPress = (letter) => {
      const guess = guesses[guessIndex]

      if (letter === "ENTER") {
        if (guess.length !== 5) {
          alert("La palabra debe tener 5 caracteres")
          return
        }

        if (!words.includes(guess)) {
          alert("La palabra no esta registrada, intente de nuevo")
          return
        }

        if (guess === activeWord) {
          setGuessIndex(guessIndex + 1)
          setGameComplete(true)
          alert("Ganaste, Felicidades Crack!")
          return
        }

        if (guessIndex < 5) {
          setGuessIndex(guessIndex + 1)
        } else {
          setGameComplete(true)
          alert("Perdedor!")
        }
      

      }


      if (letter === "⌫") {
        setGuesses({...guesses, [guessIndex]: guess.slice(0, -1) })
        return
      }


      if (guess.length >= 5) {
        return
      }

      setGuesses({ ...guesses, [guessIndex]: guess + letter })
    }

    React.useEffect(() => {
      if (!gameComplete) {
        setActiveWord(words[Math.floor(Math.random() * words.length)])
        setGuesses(defaultGuess)
        setGuessIndex(0)
      }
    }, [gameComplete])

    return ( 

      <View style={styles.container}>

        <View style={styles.containerj}>
        <GuessRow
          guess={guesses[0]}
          word={activeWord}
          guessed={guessIndex > 0}
        />
        <GuessRow
          guess={guesses[1]}
          word={activeWord}
          guessed={guessIndex > 1}
        />
        <GuessRow
          guess={guesses[2]}
          word={activeWord}
          guessed={guessIndex > 2}
        />
        <GuessRow
          guess={guesses[3]}
          word={activeWord}
          guessed={guessIndex > 3}
        />
        <GuessRow
          guess={guesses[4]}
          word={activeWord}
          guessed={guessIndex > 4}
        />
        <GuessRow
          guess={guesses[5]}
          word={activeWord}
          guessed={guessIndex > 5}
        />
        </View>

        {gameComplete ? (
          <View style={styles.gameCompleteWrapper}>
            <Text>
              <Text style={styles.bold}>Palabra Correcta:</Text> {activeWord}
            </Text>
            <View>
              <Button
                title="Comenzar de Nuevo"
                onPress={() => {
                  setGameComplete(false)
                }}
              />
            </View>
          </View>
        ) : null}

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

    guessedLetter: {
      color: "#fff",
    },
    guessCorrect: {
      backgroundColor: "#6aaa64",
      borderColor: "#6aaa64",
    },

    guessInWord: {
      backgroundColor: "yellow"
    },
    
    guessNotInWord: {
      backgroundColor: 'gray'
    },

    gameCompleteWrapper: {
      alignItems: "center",
    },
    bold: {
      fontWeight: "bold",
    },
});