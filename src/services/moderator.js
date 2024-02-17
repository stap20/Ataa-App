import API from "./API";
import { Platform } from "react-native";

export default {
  getModerators: async () => {
    try {
      const response = await API.post("/user/getAllModerators");

      if (response.data.success) {
        return response.data.data.map((item) => {
          return {
            moderatorName: item.name,
            moderatorNumber: `+${item.countryCode} (${item.phoneNumber})`,
            profileImage: item.profileImage,
            id: item._id,
          };
        });
      } else {
        return [];
      }
    } catch (error) {
      console.error("Error:", error);
      return [];
    }
  },

  deleteModerator: async (id) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };

      const data = { id };
      const response = await API.post("/user/deleteModerator", data, config);
      ToastHandler.showToast(response.data.message);
      return response.data.success;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  },

  getModerator: async (id) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };

      const data = { id };
      const response = await API.post("/user/getModerator", data, config);

      return response.data;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  },

  editModerator: async ({
    id,
    name,
    email,
    password,
    phoneNumber,
    profileImage,
    countryCode = "974",
  }) => {
    try {
      var isImageUpload = false;
      if (profileImage !== null && !profileImage.includes("uploads/user/")) {
        isImageUpload = true;
      }

      const data = {
        id,
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
        console.log(profileImage);
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

      const response = await API.post("/user/editModerator", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // console.log(response.data);
      ToastHandler.showToast(response.data.message);
      return response.data;
    } catch (error) {
      console.error("Upload failed:", error);
      return false;
    }
  },
};
