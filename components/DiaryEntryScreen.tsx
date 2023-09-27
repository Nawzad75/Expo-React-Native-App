import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

interface DiaryEntryScreenProps {
  navigation: any; // Define appropriate navigation type
}

const DiaryEntryScreen: React.FC<DiaryEntryScreenProps> = ({ navigation }) => {
  const [diaryEntry, setDiaryEntry] = useState("");

  const handleSaveDiaryEntry = () => {
    // Implement saving the diary entry to your chosen storage solution here
    // You can use AsyncStorage or a database to store the entry
    console.log("Diary entry saved:", diaryEntry);
  };

  return (
    <View style={styles.container}>
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
