import API from "./API";
import { ToastHandler } from "@utils";

export default {
  getEditMessages: async () => {
    try {
      const response = await API.post("/message/getMessages");
      ToastHandler.showToast(response.data.message);

      if (response.data.success) {
        return response.data.data;
      }

      return {
        acceptMessage: "",
        rejectMessage: "",
        rejectStorageMessage: "",
      };
    } catch (error) {
      ToastHandler.showToast(`Get Edit Error: ${error.message}`, true);

      console.error("Get Edit Error:", error);
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
      ToastHandler.showToast(`Update Edit Error: ${error.message}`, true);

      console.error("Update Edit Error:", error);
      return false;
    }
  },
};
