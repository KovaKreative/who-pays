import { Button } from "@rneui/base";
import { StyleSheet, Text, View } from "react-native";

export default function Loser(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.textLight}>{props.loser} pays the bill!</Text>
      <Button
        buttonStyle={styles.button}
        title="Try Again"
        onPress={props.tryAgain}
      />
      <Button
        buttonStyle={styles.button}
        title="Start Over"
        onPress={props.startOver}

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
    color: '#FED'
  },
  button: {
    marginTop: 10,
    borderRadius: 50,
    backgroundColor: '#495'
  }
});