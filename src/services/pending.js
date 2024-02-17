import { formatDonationNumber } from "@utils";
import API from "./API";

export default {
  getPendingDonations: async () => {
    try {
      const response = await API.post("/donation/getPendingDonations");

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

  cancelPendingDonation: async (id) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };

      const data = { id };
      const response = await API.post("/donation/cancelDonation", data, config);

      return response.data.success;
    } catch (error) {
      console.error("Error:", error);
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

      if (response.data.success) {
        return true;
      }

      return response.data.isSpaceIssue;
    } catch (error) {
      console.error("Error:", error);
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

      return response.data.success;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  },
};
