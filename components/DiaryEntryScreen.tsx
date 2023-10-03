import AsyncStorage from "@react-native-async-storage/async-storage";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import uuid from "react-native-uuid";
import { RootTabsParamList } from "../App";

import * as ImagePicker from "expo-image-picker";

type Props = BottomTabScreenProps<RootTabsParamList, "Diary">;

const DiaryEntryScreen: React.FC<Props> = ({ navigation, route }) => {
  const [diaryEntry, setDiaryEntry] = useState("");
  const selectedDate = route.params.selectedDate;
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSaveDiaryEntry = async () => {
    await AsyncStorage.clear();
    try {
      const diaryData = {
        id: uuid.v4(),
        entry: diaryEntry,
        imageUri: image,
        date: selectedDate,
      };

      // Save diary entry data using AsyncStorage
      await AsyncStorage.setItem(
        diaryData.id as string,
        JSON.stringify(diaryData)
      );

      console.log("Diary entry saved:", diaryData);

      // Navigate back to the previous screen or any desired screen
      navigation.goBack();
    } catch (error) {
      console.error("Error saving diary entry:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Date: {selectedDate}</Text>
      <TextInput
        style={styles.textInput}
        multiline
        placeholder="Write your diary entry here"
        value={diaryEntry}
        onChangeText={(text) => setDiaryEntry(text)}
      />
      <Button title="Pick an image" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Button title="Save Entry" onPress={handleSaveDiaryEntry} />
    </View>
  );

  // const handleSaveDiaryEntry = () => {
  //   if (diaryEntry.length > 0) {
  //     //To check the input not empty
  //     AsyncStorage.setItem("save-entry", diaryEntry);
  //     //Setting a data to a AsyncStorage with respect to a key
  //     setDiaryEntry("");
  //     //Resetting the TextInput
  //     alert("Data Saved");
  //     //alert to confirm
  //   } else {
  //     alert("Please fill data");
  //     //alert for the empty InputText
  //   }
  //   console.log("Diary entry saved:", diaryEntry);
  // };

  // return (
  //   <View style={styles.container}>
  //     <Text>Date: {selectedDate}</Text>
  //     <ImagePickerExample />

  //     <TextInput
  //       style={styles.textInput}
  //       multiline
  //       placeholder="Write your diary entry here"
  //       value={diaryEntry}
  //       onChangeText={(text) => setDiaryEntry(text)}
  //     />
  //     <Button title="Save Entry" onPress={handleSaveDiaryEntry} />
  //   </View>
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  textInput: {
    height: 200,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 10,
  },
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0553",
  },
});

export default DiaryEntryScreen;
