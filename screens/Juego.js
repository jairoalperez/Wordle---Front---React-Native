import { color } from "@rneui/base";
import React from "react";
import {View, StyleSheet, Text, TouchableOpacity, Button, Alert} from "react-native";
import CrearRoom from "./CrearRoom";

/*---------------------------------------------------------------------------------------
-------------------------------- Bloque de Letras ---------------------------------------
---------------------------------------------------------------------------------------*/

var ronda = 0

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


/*---------------------------------------------------------------------------------------
------------------------------------- Fila de Letras ------------------------------------
---------------------------------------------------------------------------------------*/  
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


  /*---------------------------------------------------------------------------------------
  ------------------------------------- Fila de Teclado -----------------------------------
  ---------------------------------------------------------------------------------------*/
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

    /*---------------------------------------------------------------------------------------
    ------------------------------------- Teclado -------------------------------------------
    ---------------------------------------------------------------------------------------*/
    const Keyboard = ({ onKeyPress }) => {
    const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
    const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"]
    const row3 = ["Z", "X", "C", "V", "B", "N", "M"]
  
    return (
        <View style={styles.keyboard}>
        <KeyboardRow letters={row1} onKeyPress={onKeyPress}/>
        <KeyboardRow letters={row2} onKeyPress={onKeyPress}/>
        <KeyboardRow letters={row3} onKeyPress={onKeyPress}/>
        <View style={styles.keyboardRow}>
        <TouchableOpacity onPress={() => onKeyPress("ENTER")}>
          <View style={styles.keye}>
            <Text style={styles.keyLettereb}>ENTER</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onKeyPress("⌫")}>
          <View style={styles.keyb}>
            <Text style={styles.keyLettereb}>⌫</Text>
          </View>
        </TouchableOpacity>
      </View>
        </View>
    )
}


/*---------------------------------------------------------------------------------------
------------------------------------- Palabras Registradas ------------------------------
---------------------------------------------------------------------------------------*/
const words = ["APOYO", "ARMES", "BESOS", "ARCOS", "BOTAS", "BOTAN", "ASILO", "BRUTA", "BRUTO", "BUSES", "AEREA", "AZOTE", "AGUDO", "BAÑOS",
               "CAJAS", "RAMPA", "CALCE", "CHILE", "CUNAS", "CURSO", "CREMA", "CRECE", "CANSA", "COJOS", "CAUSA", "CERDO", "DONEN", "COMAS",
               "DATOS", "CAZAN", "DOMAN", "DILES", "DENSA", "DAÑOS", "CERAS", "FIRMA", "FORME", "HIJAS", "HIJOS", "GANAS", "GANAR", "GANES", 
               "GAFAS", "HILOS", "HINCA", "HINCO", "GIROS", "GIRAS", "GORDA", "GORDO", "IDEAS", "EVITA", "JAPON", "JALON", "FETOS", "FILAS", 
               "JOYAS", "FALLE", "FALLA", "FALLO", "HACEN", "HACES", "HABIA", "HAGAN", "HABRA", "HABRE", "FETOS", "FERIA", "JUGOS", "METAS", 
               "METES", "MEZAS", "MICAS", "LUCHA", "LUCHÉ", "LOTEO", "LABRA", "LACRA", "LACTA", "LADRO", "MANGO", "MITOS", "MITRO", "MISAS", 
               "MIRAN", "MIRAS", "MIGRO", "MOJAS", "MOJEN", "MARES", "MARCO", "LATAS", "LAXAS", "MARES", "LAXAS", "LIBIA", "MEDIA", "MEDIO", 
               "MOSCU", "MONOS", "MONAS", "MORAS", "MOÑOS", "MOVER", "MEMES", "LIMAS", "MUCAS", "MANCO", "MENES", "LIBRO", "MESES", "LOROS", 
               "MUEVE", "LOSAS", "MAYAS", "MATES", "MAZOS", "MUDAS", "MUDOS", "MUCOS", "MOÑOS", "MOTAS", "MATAS", "LEVES", "LEMAS", "LINDA", 
               "LINDO", "PACAS", "PESES", "PESOS", "PETAS", "PAGUE", "NABOS", "PAJAS", "NAZCA", "NACER", "PARDA", "PODIA", "PANES", "PASES", 
               "PASEN", "PASAR", "PASOS", "ODIOS", "ODIAS", "PECAS", "PAÑAL", "POSEN", "PISTA", "OBRAS", "OIRTE", "PUJAN", "PUEDO", "PRIMO", 
               "PERAS", "PENES", "PENDA", "PANDA", "PEGUE", "PENAN", "OVULO", "RETES", "RAYAS", "RATAS", "RATOS", "RATON", "ROMAS", "ROMOS", 
               "QATAR", "QUEME", "QUESO", "QUITO", "SELVA", "SALGO", "SUDAR", "SUDAS", "TABUS", "TACOS", "TIRAS", "SUDAN", "VIENE", "VIERA", 
               "TRAES", "TRAER", "TROTA", "TROTO", "URDAS", "USAOS", "USATE", "USEIS", "VACAS", "VACAN", "VAGOS", "VAGAS", "VAGUE", "WIKIS", 
               "VUDUS", "VOTAR", "VOTES", "VIDEO", "VUDUS", "VUELO", "YATES", "YEMAS", "YEMEN", "YENDO", "YENES", "YESCA", "ZACAS", "VOTAD",]


/*---------------------------------------------------------------------------------------
------------------------------------- Posiciones de Palabras ----------------------------
---------------------------------------------------------------------------------------*/         
const defaultGuess = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
}


/*---------------------------------------------------------------------------------------
------------------------------------- Funcionalidad del Juego ---------------------------
---------------------------------------------------------------------------------------*/ 
const Juego = ({navigation}) => {

  const tiempo = global.time
  var intervalo = 1000
  const rondas = global.rondas


  //Temporizador
  const [seconds, setSeconds] = React.useState(tiempo)
  const [customInterval, setCustomInterval] = React.useState()

  //comenzar tiempo
  const startTimer = () => {
    setCustomInterval(
      setInterval(() => {
        changeTime()
      }, intervalo)
    )
  }

  //parar tiempo
  const stopTimer = () => { 
    if (customInterval) {
      clearInterval(customInterval)
      setGameComplete(true)
    }
  }

  //cambiar tiempo
  const changeTime = () => {
    setSeconds((prevState) => {
      if (prevState == 0) {
        stopTimer(true)
        setSeconds(0)
        setGameComplete(true)
      }
      return prevState - 1
    })
  }

  //declarando las constantes del juego
  const [activeWord, setActiveWord] = React.useState(words[0])
  const [guessIndex, setGuessIndex] = React.useState(0)
  const [guesses, setGuesses] = React.useState(defaultGuess)
  const [gameComplete, setGameComplete] = React.useState(false)
  const [pts, setPts] = React.useState(0) 

    const handleKeyPress = (letter) => {
      const guess = guesses[guessIndex]

      if (letter === "ENTER") {

        //Tamaño de palabra debe ser 5 letras
        if (guess.length !== 5) {
          alert("La palabra debe tener 5 caracteres")
          return
        }

        //La palabra debe estar registrada
        if (!words.includes(guess)) {
          alert("La palabra no esta registrada, intente de nuevo")
          return
        }
        
        //Juego Completado (Victoria)
        if (guess === activeWord) {
          setGuessIndex(guessIndex + 1)
          setGameComplete(true)
          setPts(pts + 1)
          alert("Ganaste, Felicidades Crack!")
          return
        }

        //Juego Completado (Derrota)
        if (guessIndex < 5) {
          setGuessIndex(guessIndex + 1)
        } else {
          setGameComplete(true)
          alert("Perdedor!")
        }
      

      }


      //Tecla de Borrar
      if (letter === "⌫") {
        setGuesses({...guesses, [guessIndex]: guess.slice(0, -1) })
        return
      }

      
      if (guess.length >= 5) {
        return
      }

      setGuesses({ ...guesses, [guessIndex]: guess + letter })
    }

    //Inicio/Reinicio de Juego
    React.useEffect(() => {

      if (!gameComplete) {
        setActiveWord(words[Math.floor(Math.random() * words.length)])
        startTimer(true)
        setSeconds(tiempo)
        setCustomInterval((intervalo))
        setGuesses(defaultGuess)
        setGuessIndex(0)
      }else{ 
        ronda++
        if (ronda == rondas) {
          Alert.alert('Juego Terminado, Aprobaste '+pts+' rondas de '+rondas+' !!!')
          ronda = 0
          navigation.navigate('Hub')
        }
      }
    }, [gameComplete])


    /*---------------------------------------------------------------------------------------
    ------------------------------------- Vista del Juego -----------------------------------
    ---------------------------------------------------------------------------------------*/ 
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

        <Text style={styles.textTimer}>
          {seconds < 10 ? seconds : seconds}
        </Text>

        {gameComplete ? (
          <View style={styles.gameCompleteWrapper}>
            <Text style={styles.bold}>
              <Text >Palabra Correcta: {activeWord}</Text> 
            </Text>
            <View>
            <TouchableOpacity
              onPress={() => {
                setGameComplete(false)
              }}
              style={styles.buttonRestart}>
              <Text style={styles.textbuttonR}>
                Siguiente Ronda
              </Text>
            </TouchableOpacity>
            </View>
          </View>
        ) : null}

        <Keyboard onKeyPress={handleKeyPress}/>
        </View>

    )
};
export default Juego


/*---------------------------------------------------------------------------------------
------------------------------------- Estilos -------------------------------------------
---------------------------------------------------------------------------------------*/ 
const styles = StyleSheet.create({

    //Contenedor de la vista general del juego
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "lightgreen",
    },

    //Contenedor de los cuadros
    containerj: {
        marginBottom: 10,
    },

    //Fila
    guessRow: {
        flexDirection: "row",
        justifyContent: "center",
      },

    //Cuadrado
    guessSquare: {
        borderColor: "black",
        backgroundColor : "white",
        borderWidth: 3,
        borderRadius: 25,
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
      },
    
    //Letra
    guessLetter: {
        fontSize: 25,
        fontWeight: "bold",
        color: "black",
      },

    //Contenedor del teclado
    keyboard: { 
    flexDirection: "column" ,
    },

    //Fila del teclado
    keyboardRow: {
    flexDirection: "row",
    justifyContent: 'center',
    marginBottom: 10,
    },

    //Contenedor de la letra del teclado
    key: {
        backgroundColor: "white",
        padding: 10,
        margin: 3,
        borderRadius: 5,
    },

    //Contenedor de la letra enter
    keye: {
      backgroundColor: "darkblue",
      marginRight: 20,
      padding: 10,
      margin: 3,
      borderRadius: 5,
    },

    //Contenedor de la letra borrar
    keyb: {
      backgroundColor: "darkred",
      padding: 10,
      margin: 3,
      borderRadius: 5,
    },

    //Letra del teclado
    keyLetter: {
        fontWeight: "500",
        fontSize: 20,
    },

    //Letra del teclado enter y borrar
    keyLettereb: {
      fontWeight: "500",
      fontSize: 30,
      color: 'white',
    },

    //Color de las letras seleccionadas
    guessedLetter: {
      color: "#fff",
    },

    //Letra Correcta
    guessCorrect: {
      backgroundColor: "#6aaa64",
      borderColor: "#6aaa64",
    },

    //Letra en la palabra
    guessInWord: {
      backgroundColor: "goldenrod"
    },
    
    //Letra no en la palabra
    guessNotInWord: {
      backgroundColor: 'gray'
    },

    //Timer
    textTimer: {
      fontSize: 30,
      marginBottom: 10,
    },

    //Juego Completado Opciones
    gameCompleteWrapper: {
      backgroundColor : 'white',
      alignItems: "center",
      justifyContent: 'center',
      marginBottom: 20,
      borderRadius: 40,
      width: 300,
      height: 80,
    },
    bold: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 5,
    },
    buttonRestart: {
      backgroundColor: 'darkblue',
      margintop: 10,
      padding: 5,
      borderRadius: 40
    },
    textbuttonR: {
      fontSize: 20,
      color: 'white',
    },

});