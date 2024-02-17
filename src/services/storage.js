import { formatDonationNumber, ToastHandler } from "@utils";
import API from "./API";

export default {
  getStorageData: async () => {
    try {
      const response = await API.post("/donation/getStorageDonations");

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
      console.error("Error:", error);
      return [];
    }
  },

  emptyStorage: async () => {
    try {
      const response = await API.post("/donation/emptyStorageDonations");
      ToastHandler.showToast(response.data.message);
      return response.data.success;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  },
};
