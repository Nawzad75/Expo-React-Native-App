import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "red",
          fontSize: 20,
          position: "absolute",
          top: 30,
        }}
      >
        Demo!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b3e5fc",
    alignItems: "center",
    justifyContent: "center",
  },
});
