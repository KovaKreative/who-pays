import { StyleSheet, Text, View } from "react-native";

export default function Loser(props) {
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