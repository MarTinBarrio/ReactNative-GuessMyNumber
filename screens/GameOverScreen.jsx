import { View, Image, Text, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import Colors from '../constants/colors';
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

function GameOverScreen({ roundsNumber, userNumber, onStarNewGame }) {

  const { height, width } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>Game Over!!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require('../assets/images/success.png')} />
        </View>
        {/* los Text q contienen otros Text aplica el efecto casca de estilos */}
        <Text style={styles.sumaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> round
          to guess the number <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onStarNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}
export default GameOverScreen;

//const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    //width: deviceWidth < 380 ? 150 : 300,
    //height: deviceWidth < 380 ? 150 : 300,
    //borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  sumaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  }
})