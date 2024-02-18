import API from "./API";
import { ToastHandler } from "@utils";

export default {
  getEditMessages: async () => {
    try {
      const response = await API.post("/message/getMessages");

      if (response.data.success) {
        ToastHandler.showToast(response.data.message);
        return response.data.data;
      }

      ToastHandler.showToast(response.data.message);
      return {
        acceptMessage: "",
        rejectMessage: "",
        rejectStorageMessage: "",
      };
    } catch (error) {
      console.error("Error:", error);
      return {
        acceptMessage: "",
        rejectMessage: "",
        rejectStorageMessage: "",
      };
    }
  },

  updateEditMessages: async ({
    id,
    acceptMessage,
    rejectMessage,
    rejectStorageMessage,
  }) => {
    try {
      const data = {
        id,
        acceptMessage,
        rejectMessage,
        rejectStorageMessage,
      };

      const response = await API.post("/message/updateMessage", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      ToastHandler.showToast(response.data.message);

      return response.data.success;
    } catch (error) {
      console.error("Upload failed:", error);
      return false;
    }
  },
};
