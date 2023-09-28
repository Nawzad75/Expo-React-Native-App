import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { Image } from "expo-image";
import React from "react";
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
          zIndex: 100,
        }}
      >
        Demo!
      </Text>
      <Image
        style={styles.image}
        source="https://picsum.photos/seed/696/3000/2000"
        contentFit="cover"
        transition={1000}
      />
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
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0553",
  },
});
