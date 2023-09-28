import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import { RootTabsParamList } from "../App";

type Props = BottomTabScreenProps<RootTabsParamList, "Home">;

export default function HomeScreen({}: Props) {
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
