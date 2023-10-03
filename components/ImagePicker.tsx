// import * as ImagePicker from "expo-image-picker";
// import React, { useState } from "react";
// import { Button, Image, View } from "react-native";

// export default function ImagePickerExample() {
//   const [image, setImage] = useState(String);

//   const pickImage = async () => {
//     // No permissions request is necessary for launching the image library
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,

//       quality: 1,
//     });

//     console.log(result);

//     if (!result.canceled) {
//       setImage(result.assets[0].uri);
//     }
//   };

//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Button title="Pick an image from camera roll" onPress={pickImage} />
//       {image && (
//         <Image
//           source={{ uri: image }}
//           style={{ width: "100 %", height: "100%" }}
//         />
//       )}
//     </View>
//   );
// }
