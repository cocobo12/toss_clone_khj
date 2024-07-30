import {
  launchImageLibraryAsync,
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { useState } from "react";
import { StyleSheet, Alert, Image, View, Text } from "react-native";

import { Colors } from "../../constants/colors";
import OulineButton from "../UI/OutlinedButton";

function ImagePicker({ column, onTakeImage }) {
  const [pickedImage, setPickedImage] = useState();

  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  async function verifyPermissions() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      const permissionResponse = await requestPermission();

      if (!permissionResponse.granted) {
        Alert.alert(
          "Insufficient Permissions!",
          "You need to grant camera permissions to use this app."
        );
        return false;
      }
    }
    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }
    console.log("카메라 촬영 전");

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    console.log(image);
    console.log(image.assets);
    console.log("이미지 uri : ", image.assets[0].uri);
    setPickedImage(image.assets[0].uri);
    onTakeImage(column, image.assets[0].uri);
  }

  let imagePreview = <Text>No image taken yet.</Text>;
  console.log(pickedImage);

  if (pickedImage) {
    console.log("사진테스트");
    console.log(pickedImage);
    imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;
  }

  async function pickImageHandler() {
    const image = await launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!image.canceled) {
      console.log("이미지 라이브러리 :", image);
      setPickedImage(image.assets[0].uri);
      onTakeImage(column, image.assets[0].uri);
    }
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <View style={styles.buttonContainer}>
        <OulineButton onPress={takeImageHandler}>
          아이콘 이미지 촬영
        </OulineButton>
        <OulineButton onPress={pickImageHandler}>
          라이브러리에서 선택
        </OulineButton>
      </View>
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginLeft: 80,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    overflow: "hidden",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  buttonContainer: {
    marginHorizontal: 40,
  },
});
