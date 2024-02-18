import API from "./API";
import { Platform } from "react-native";
import { ToastHandler } from "@utils";

export default {
  createDonation: async ({
    quantity,
    imagesList,
    donationTypeId = "65cdba3823bc97c6dae20d9e",
    donationDescription,
  }) => {
    try {
      const data = {
        quantity,
        imagesList,
        donationTypeId,
        donationDescription,
        isCompressed: true,
      };

      const formData = new FormData();

      if (imagesList && imagesList.length > 0) {
        imagesList.forEach(({ image }, index) => {
          const fileUri =
            Platform.OS === "android" ? image : image.replace("file://", "");

          const extension = fileUri.split(".").pop().toLowerCase();
          const fileName = `donation_${index}.${extension}`;

          formData.append(`images`, {
            uri: fileUri,
            name: fileName,
            type: `image/${extension}`,
          });
        });
      }

      // Append other data fields to FormData
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      const response = await API.post("/donation/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        ToastHandler.showToast(response.data.message);
        return response.data.isSpaceIssue;
      }
      ToastHandler.showToast(response.data.message);
      return true;
    } catch (error) {
      console.error("Create Donation failed:", error);
      return true;
    }
  },
};
