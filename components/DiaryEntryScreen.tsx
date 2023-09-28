import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { RootTabsParamList } from "../App";
import ImagePickerExample from "./ImagePicker";

type Props = BottomTabScreenProps<RootTabsParamList, "Diary">;

const DiaryEntryScreen: React.FC<Props> = ({ navigation, route }) => {
  const [diaryEntry, setDiaryEntry] = useState("");
  const selectedDate = route.params.selectedDate;

  const handleSaveDiaryEntry = () => {
    console.log("Diary entry saved:", diaryEntry);
  };

  return (
    <View style={styles.container}>
      <Text>Date: {selectedDate}</Text>
      <ImagePickerExample />

      <TextInput
        style={styles.textInput}
        multiline
        placeholder="Write your diary entry here"
        value={diaryEntry}
        onChangeText={(text) => setDiaryEntry(text)}
      />
      <Button title="Save Entry" onPress={handleSaveDiaryEntry} />
    </View>
  );
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
});

export default DiaryEntryScreen;
