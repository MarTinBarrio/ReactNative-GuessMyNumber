import { Dimensions, StyleSheet, View } from "react-native"; 
import Colors from "../../constants/colors";

function Card ({ children }) {
  return (
    <View style={styles.card}>{children}</View>
  );

}
export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    marginTop: deviceWidth < 380 ? 18: 36,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, //solo p Android
    shadowColor: 'black', // solo p ios
    shadowOffset: { width: 0, height: 2 }, // solo p ios
    shadowRadius: 6, // solo p ios
    shadowOpacity: 0.25, // solo p ios
  }
});