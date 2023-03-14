import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({ children, onPress }) {

  function imprime() {
    //console.log('imprime');
    onPress();
  }

  /* android_ripple solo funciona en Android y es un efecto de cambio de color al presionarlo
  en este caso para q tenga efecto el elemento pressable debe estar dentro de la vista */

  return (
    <View style={styles.buttonOuterContainer}>
      {/* 
      Esta lines funciona para android pero no para ios, para q fucione con ios, agrego los estilos con una función en linea, ó arrow function
      <Pressable style={styles.buttonInnerContainer} onPress={imprime} android_ripple={{ color: '#97607b' }}>  
      e.pressed es el evento q sucede cuando se presiona el elemento,
      los estilos los puedo pasar como una colección, como un array entre []*/}

      <Pressable style={({pressed}) => pressed
          ? [styles.buttonInnerContainer, styles.pressed]
          : styles.buttonInnerContainer }
        onPress={imprime} /**es igual q poner onPress = {onPress}, dado q así llamé al props */
        android_ripple={{ color: Colors.primary600 }}
        >

        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View >

  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    
  },
  pressed: {
    opacity: 0.75
  }
});

export default PrimaryButton;