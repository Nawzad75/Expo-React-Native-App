import AsyncStorage from "@react-native-async-storage/async-storage";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { Camera, CameraType } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import uuid from "react-native-uuid";
import { RootTabsParamList } from "../App";

type Props = BottomTabScreenProps<RootTabsParamList, "Diary">;

const DiaryEntryScreen: React.FC<Props> = ({ navigation, route }) => {
  const [diaryEntry, setDiaryEntry] = useState("");
  const selectedDate = route.params?.selectedDate;
  const [image, setImage] = useState<string | null>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [cameraRef, setCameraRef] = useState<Camera | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const captureImage = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera permissions to make this work!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,

      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSaveDiaryEntry = async () => {
    // await AsyncStorage.clear();

    try {
      const diaryData = {
        id: uuid.v4(),
        entry: diaryEntry,
        imageUri: image,
        date: selectedDate,
      };

      await AsyncStorage.setItem(
        diaryData.id as string,
        JSON.stringify(diaryData)
      );

      setDiaryEntry("");
      setImage(null);


      console.log("Diary entry saved:", diaryData);

      navigation.goBack();
    } catch (error) {
      console.error("Error saving diary entry:", error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Date: {selectedDate}</Text>
        <TextInput
          style={styles.textInput}
          multiline
          placeholder="Write your diary entry here"
          value={diaryEntry}
          onChangeText={(text) => setDiaryEntry(text)}
        />
        {hasPermission === null ? (
          <View />
        ) : hasPermission === false ? (
          <Text>No access to camera</Text>
        ) : (
          <Camera
            style={styles.camera}
            type={CameraType.back}
            ref={(ref) => setCameraRef(ref)}
          />
        )}

        <Button title="Take a photo" onPress={captureImage} />
        <Text></Text>
        <Button title="Pick an image" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={styles.image} />}
        <Text></Text>
        <Button title="Save Entry" onPress={handleSaveDiaryEntry} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  camera: {
    flex: 1,
    marginBottom: 16,
  },
  textInput: {
    height: 200,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    marginBottom: 16,
  },
});

export default DiaryEntryScreen;
