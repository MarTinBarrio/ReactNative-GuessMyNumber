import { View, TextInput, StyleSheet } from "react-native";

import PrimaryButton from '../components/PrimaryButton'

function StartGameScreen() {
  return (
    <View style={styles.inputcontainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect="false"
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  inputcontainer: {
    padding: 16,
    marginHorizontal: 24,
    marginTop: 100,
    backgroundColor: '#72063c',
    borderRadius: 8,
    elevation: 4, //solo p Android
    shadowColor: 'black', // solo p ios
    shadowOffset: { width: 0, height: 2 }, // solo p ios
    shadowRadius: 6, // solo p ios
    shadowOpacity: 0.25, // solo p ios
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})

export default StartGameScreen;