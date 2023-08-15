import { StyleSheet, Text, View } from "react-native";
// import { Text, View } from "@rneui/base";

export default function Home() {
  return (
    <View>
      <Text style={styles.textLight}>Hello?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textLight: {
    color: '#FED'
  }
});