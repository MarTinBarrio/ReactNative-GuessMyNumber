import { View, TextInput, StyleSheet } from "react-native";

import PrimaryButton from '../components/PrimaryButton'

function StartGameScreen(){
  return (
    <View style={styles.inputcontainer}>
      <TextInput />
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  inputcontainer:{
    padding: 16,
    marginHorizontal: 24,
    marginTop: 100,
    backgroundColor: '#72063c',
    borderRadius: 8,
  }
})

export default StartGameScreen;