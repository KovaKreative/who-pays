import { Button } from "@rneui/base";
import { StyleSheet, Text, View } from "react-native";

export default function Loser(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.textLight}>{props.loser}</Text>
      <Text style={styles.textLight}>pays the bill!</Text>
      <Button
        buttonStyle={styles.button}
        title="Try Again"
        onPress={props.tryAgain}
        titleStyle={{
          fontFamily: 'OlivessansPimiento',
          fontSize: 24
        }}
      />
      <Button
        buttonStyle={styles.button}
        title="Start Over"
        onPress={props.startOver}
        titleStyle={{
          fontFamily: 'OlivessansPimiento',
          fontSize: 24
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#123',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLight: {
    color: '#FED',
    fontFamily: 'OlivessansPimiento',
    fontSize: 28,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 10
  },
  button: {
    marginTop: 10,
    padding: 25,
    paddingHorizontal: 25,
    borderRadius: 50,
    backgroundColor: '#495'
  }
});