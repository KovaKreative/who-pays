import { StyleSheet, Text, View } from "react-native";

export default function Loser() {
  return (
    <View>
      <Text style={styles.textLight}>Loser?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textLight: {
    color: '#FED'
  }
});