import API_URL from "./API_URL";
import API from "./API";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import { User, ToastHandler } from "@utils";

export default {
  editProfile: async ({
    name,
    email,
    password,
    phoneNumber,
    profileImage,
    countryCode = "974",
  }) => {
    try {
      var isImageUpload = false;
      if (!profileImage.includes("uploads/user/")) {
        isImageUpload = true;
      }

      const data = {
        name,
        email,
        password,
        phoneNumber,
        countryCode,
        profileImage: !isImageUpload ? profileImage : null,
        isCompressed: true,
      };

      const formData = new FormData();

      if (isImageUpload) {
        const fileUri =
          Platform.OS === "android"
            ? profileImage
            : profileImage.replace("file://", "");

        const extension = fileUri.split(".").pop().toLowerCase();
        const fileName = "profile." + extension;

        formData.append("image", {
          uri: fileUri,
          name: fileName,
          type: `image/${extension}`,
        });
      }

      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      const response = await API.post("/user/edit", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      ToastHandler.showToast(response.data.message);

      if (response.data.success) {
        await AsyncStorage.setItem("user", JSON.stringify(response.data.data));
        User.updateData(response.data.data);
      }
      return response.data.success;
    } catch (error) {
      ToastHandler.showToast(`Edit Profile Error: ${error.message}`, true);

      console.error("Edit Profile Error:", error);
      return false;
    }
  },

  createProfile: async ({
    name,
    email,
    password,
    phoneNumber,
    profileImage,
    countryCode = "974",
  }) => {
    try {
      const data = {
        name,
        email,
        password,
        phoneNumber,
        countryCode,
        isCompressed: true,
      };

      const formData = new FormData();

      if (profileImage !== null) {
        const fileUri =
          Platform.OS === "android"
            ? profileImage
            : profileImage.replace("file://", "");

        const extension = fileUri.split(".").pop().toLowerCase();
        const fileName = "profile." + extension;

        formData.append("image", {
          uri: fileUri,
          name: fileName,
          type: `image/${extension}`,
        });
      }

      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      const response = await API.post("/user/createModerator", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      ToastHandler.showToast(response.data.message);
      return response.data.success;
    } catch (error) {
      ToastHandler.showToast(`Create Profile Error: ${error.message}`, true);

      console.error("Create Profile Error:", error);
      return false;
    }
  },
};
