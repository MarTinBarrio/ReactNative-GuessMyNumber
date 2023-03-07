import { useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";
import Colors from "../constants/colors";

import PrimaryButton from '../components/ui/PrimaryButton';

function StartGameScreen(props) {

  const [enteredNumber, setEnteredNunmber] = useState('');

  function numberInputHandler(enteredText){
    //console.log(enteredNumber);
    setEnteredNunmber(enteredText);
  }

  function confirmInputHandler(){
    //console.log(enteredNumber);
    const choseNumber = parseInt(enteredNumber);
    if (isNaN (choseNumber) || choseNumber <= 0 || choseNumber > 99){
      //show alert
      //Alert.prompt()// crea un dialogo
      // Alerte.alert('title', 'msg', 'btns');
      Alert.alert(
        'Numero Invalido',
        'El numero debe ser un número válido entre 0 y 99',
        [{text: 'ok', style: 'destructive', onPress: resetInputHandler}]) ;
      return;
    }else{
      props.onPickNumber(enteredNumber);
    }
  }

  function resetInputHandler(){
    setEnteredNunmber('');
  }

  return (
    <View style={styles.inputcontainer}>
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
        <View  style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputcontainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    marginTop: 100,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, //solo p Android
    shadowColor: 'black', // solo p ios
    shadowOffset: { width: 0, height: 2 }, // solo p ios
    shadowRadius: 6, // solo p ios
    shadowOpacity: 0.25, // solo p ios
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