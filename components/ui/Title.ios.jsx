import { Text, StyleSheet, Platform  } from 'react-native';

function Title({ children }) {
  return (
    <Text style={styles.title}>{children}</Text>
  );
  
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    //fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    //Para teenr distnitos estylos y comportamientos dependiendo el SO,
    //podemos usar cualquiera de las siguientes 2 líneas
    //borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderWidth: 0,
    borderColor: 'white',
    padding: 12,
    maxWidth: '80%',
    width: 300,
  }
})