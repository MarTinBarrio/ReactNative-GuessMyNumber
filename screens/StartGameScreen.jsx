import { useState } from "react";
import { View, TextInput, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from "react-native";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";

import PrimaryButton from '../components/ui/PrimaryButton';
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen(props) {

  const [enteredNumber, setEnteredNunmber] = useState('');

  const { height, width } = useWindowDimensions();

  function numberInputHandler(enteredText) {
    //console.log(enteredNumber);
    setEnteredNunmber(enteredText);
  }

  function confirmInputHandler() {
    //console.log(enteredNumber);
    const choseNumber = parseInt(enteredNumber);
    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      //show alert
      //Alert.prompt()// crea un dialogo
      // Alerte.alert('title', 'msg', 'btns');
      Alert.alert(
        'Numero Invalido',
        'El numero debe ser un número válido entre 0 y 99',
        [{ text: 'ok', style: 'destructive', onPress: resetInputHandler }]);
      return;
    } else {
      props.onPickNumber(enteredNumber);
    }
  }

  function resetInputHandler() {
    setEnteredNunmber('');
  }

  const marginTopDistance = height < 380 ? 30 : 100;
  
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior='position'>
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={numberInputHandler}
              value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

//const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  screen: {
    felx: 1,
    //marginTop: deviceHeight < 400 ? 300: 100,
    
  },
  rootContainer: {
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "stretch",
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 1,
  }
})

export default StartGameScreen;