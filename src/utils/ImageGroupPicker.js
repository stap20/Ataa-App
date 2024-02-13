import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const options = {
  mediaTypes: ImagePicker.MediaTypeOptions.All,
  quality: 1,
  allowsMultipleSelection: true,
};

const filterResults = (images) => {
  let out = [];
  for (let index = 0; index < images.length; index++) {
    const element = images[index];
    out.push({
      id: index,
      aspectRaito: element.width / element.height,
      width: element.width,
      height: element.height,
      image: element.uri,
    });
  }
  console.log(out);
  return out;
};

const ImageGroupPicker = {
  pickImages: async () => {
    const permissions = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissions.status == ImagePicker.PermissionStatus.GRANTED) {
      let result = await ImagePicker.launchImageLibraryAsync(options);

      if (!result.canceled) {
        console.log(`------------------------------------`);
        console.log(result.assets);
        console.log(`------------------------------------`);
        return filterResults(result.assets);
      }
    }
  },

  takeImages: async () => {
    const permissions = await ImagePicker.requestCameraPermissionsAsync();
    while (permissions.canAskAgain) {
      if (!(await ImagePicker.getCameraPermissionsAsync()).granted) {
        await ImagePicker.requestCameraPermissionsAsync();
      } else {
        break;
      }
    }

    if ((await ImagePicker.getCameraPermissionsAsync()).granted) {
      let result = await ImagePicker.launchCameraAsync(options);

      if (!result.canceled) {
        console.log(`------------------------------------`);
        console.log(result.assets.uri);
        console.log(`------------------------------------`);
        return filterResults(result.assets);
      }
    }
  },
};

export default ImageGroupPicker;
