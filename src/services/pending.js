import { formatDonationNumber, ToastHandler } from "@utils";
import API from "./API";

export default {
  getPendingDonations: async () => {
    try {
      const response = await API.post("/donation/getPendingDonations");
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
      ToastHandler.showToast(`Get Pending Error: ${error.message}`, true);

      console.error("Get Pending Error:", error);
      return [];
    }
  },

  cancelPendingDonation: async (id) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };

      const data = { id };
      const response = await API.post("/donation/cancelDonation", data, config);
      ToastHandler.showToast(response.data.message);
      return response.data.success;
    } catch (error) {
      ToastHandler.showToast(`Cancel Pending Error: ${error.message}`, true);

      console.error("Cancel Pending Error:", error);
      return false;
    }
  },
  acceptPendingDonation: async (id) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };

      const data = { id };
      const response = await API.post("/donation/acceptDonation", data, config);
      ToastHandler.showToast(response.data.message);

      if (response.data.success) {
        return true;
      }
      return response.data.isSpaceIssue;
    } catch (error) {
      ToastHandler.showToast(`Accept Pending Error: ${error.message}`, true);

      console.error("Accept Pending Error:", error);
      return false;
    }
  },
  declinePendingDonation: async (id) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };

      const data = { id };
      const response = await API.post(
        "/donation/declineDonation",
        data,
        config
      );
      ToastHandler.showToast(response.data.message);
      return response.data.success;
    } catch (error) {
      ToastHandler.showToast(`Decline Pending Error: ${error.message}`, true);

      console.error("Decline Pending Error:", error);
      return false;
    }
  },
};
