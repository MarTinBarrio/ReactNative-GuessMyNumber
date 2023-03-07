import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import NumberContainer from '../components/game/NumberContainer';
import Title from '../components/ui/Title';

function generateRandomBetween(min, max, exclude){
  const rndNum = Math.floor(Math.random()* (max-min)) + min;
  if (rndNum === exclude){
    return generateRandomBetween(min, max, exclude);
  }else{
    return rndNum;
  }
}

function GameScreen({ userNumber }) {

  const [currentGuess, setCurrentGuess] = useState (generateRandomBetween(1, 100, userNumber))

  return (
    <View style={styles.screen}>
      <Title>Opponents Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Is longer or higher</Text>
        {/* + - */}
      </View>
      {/* <View>Log Rounds</View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
  
})

export default GameScreen;