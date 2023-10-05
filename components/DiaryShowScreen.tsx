import AsyncStorage from "@react-native-async-storage/async-storage";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { Image } from "expo-image";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RootTabsParamList } from "../App";

type Props = BottomTabScreenProps<RootTabsParamList, "DiaryShowScreen">;

interface SomeImage {
  entry: string;
  imageUri: string;
  date: string;
}

const DiaryShowScreen = ({}: Props) => {
  // To get the value from the TextInput
  const [getValue, setGetValue] = useState("");
  const [getImages, setImages] = useState<SomeImage[]>([]);

  const getValueFunction = async () => {
    let keys = await AsyncStorage.getAllKeys();
    console.log("keys", keys);

    for (let key of keys) {
      let imageString = await AsyncStorage.getItem(key);
      if (!imageString) continue;
      let image: SomeImage;
      try {
        image = JSON.parse(imageString);
      } catch {
        continue;
      }
      if (getImages.find((i) => i.entry === image.entry)) continue;

      console.log("image", image);

      setImages([...getImages, image]);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.titleText}>Diary Screen Show</Text>

          <TouchableOpacity
            onPress={getValueFunction}
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonTextStyle}> GET Diary </Text>
          </TouchableOpacity>
          <Text style={styles.textStyle}> {getValue} </Text>
          {getImages.map((image) => (
            <View key={image.entry}>
              <Image
                style={{ width: "100%", aspectRatio: 1 }}
                source={{ uri: image.imageUri }}
              />
              <Text>{image.entry}</Text>
              <Text>{image.date}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    textAlign: "center",
  },
  buttonStyle: {
    fontSize: 16,
    color: "white",
    backgroundColor: "green",
    padding: 5,
    marginTop: 32,
    minWidth: 250,
  },
  buttonTextStyle: {
    padding: 5,
    color: "white",
    textAlign: "center",
  },
  textInputStyle: {
    textAlign: "center",
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderColor: "green",
  },
});

export default DiaryShowScreen;
