import { Text, StyleSheet} from 'react-native' ;
import Colors from '../../constants/colors';

function InstructionText({ children, style}) {
              //styles={[style1, styl2]} si quiero asegurarme q los estilos del componente no sean pisados...
              //los coloco en orden inverso
  return (<Text style={[styles.instructionText, style]}>{children}</Text>);
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 24,
  }
});