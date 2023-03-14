import { useEffect, useState } from 'react';
import { View, StyleSheet, Alert, FlatList, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import GuessLogItem from '../components/game/GuessLogItem';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {

  const { height, width } = useWindowDimensions();

  const firstGuessNumber = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(firstGuessNumber);
  const [guessRounds, setGuessRounds] = useState([firstGuessNumber]); //guargo un array con los resultados

  /* Se ejecuta cada vez q cambia: currentGuess ó userNumber ó onGameOver */
  useEffect(() => {
    //console.log(`currentGuess = ${currentGuess} | userNumbre = ${userNumber}`);
    if (currentGuess == userNumber) {
      //console.log("Innn");
      //onGameOver(guessRounds.length);
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    //seteo nuevamente las cotas de la busqueda
    minBoundary = 1;
    maxBoundary = 100;
  }, []);
  //uso el useEffect con un array vacío [], lo q m permite ejecutar cada vez q se reinderize, reinicie el componente

  function nextGuessHandler(direction) { //direction => 'lower', 'greater'

    if ((direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert('No Mientas!', 'Sabes que eso está mal', [{ text: 'Sorry!', style: 'cancel' }])
      return;
    }

    if (direction == 'lower') {
      maxBoundary = currentGuess - 1;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber)
    setCurrentGuess(newGuess);
    setGuessRounds(prevGuessRounds => [newGuess, ...prevGuessRounds]);
    //con el spred operator (...) copio el resto de los valores del array, pero en 1er lugar pongo el nuevo valor.
  }

  const guessRoundsListLenght = guessRounds.length;

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Is longer or higher</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            {/*nextGuessHandler.bind se usa para unir
            el nombre de la función (this) al parámetro ('lower')
            ya q no puedo llamar a la función nextGuessHandler('lower') xq se ejecuta en el momento*/}
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>);

  if (width > 500) {
    content = (
      <>
        {/* <InstructionText style={styles.instructionText}>Is longer or higher</InstructionText> */}
        <View style={styles.buttonsContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>

        </View>
      </>)
  }

  return (

    <View style={styles.screen}>
      <Title>Opponents Guess</Title>
      {content}
      <View style={styles.listContainer}>
        {/* 
        {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)}
        Esta es una buena forma y funciona, pero puede ser infinito el loop y conusme mucho recurso...
        En su lugar usaremos FlatList
        */}
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => {
            return (
              <GuessLogItem
                roundNumber={guessRoundsListLenght - itemData.index}
                guess={itemData.item}
              />
            );
          }}
          keyExtractor={(item) => { return item }}
        />
      </View>
    </View>

  );
}


const styles = StyleSheet.create({
  screen: {
    felx: 1,
    padding: 24,
    marginTop: 50,
    alignItems: 'center'
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
    /* justifyContent: "space-evenly", */
    /* alignItems: "stretch", */
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    //flex: 1,
    height: 400,
    padding: 24,
  },
  buttonsContainerWide: {
    flexDirection: 'row',
    alignItems: 'center'
  },

})

export default GameScreen;
