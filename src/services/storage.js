import { formatDonationNumber, ToastHandler } from "@utils";
import API from "./API";

export default {
  getStorageData: async () => {
    try {
      const response = await API.post("/donation/getStorageDonations");
      ToastHandler.showToast(response.data.message);

      if (response.data.success) {
        return response.data.data.map((item) => {
          const { date, donationNumber, name, _id, ...other } = item;

          return {
            date: new Date(date),
            donationNumber: formatDonationNumber(donationNumber),
            donatorName: name,
            id: _id,
            ...other,
          };
        });
      } else {
        return [];
      }
    } catch (error) {
      ToastHandler.showToast(`Get Storage Error: ${error.message}`, true);

      console.error("Get Storage Error:", error);
      return [];
    }
  },

  emptyStorage: async () => {
    try {
      const response = await API.post("/donation/emptyStorageDonations");
      ToastHandler.showToast(response.data.message);
      return response.data.success;
    } catch (error) {
      ToastHandler.showToast(`Empty Storage Error: ${error.message}`, true);

      console.error("Empty Storage Error:", error);
      return false;
    }
  },
};
