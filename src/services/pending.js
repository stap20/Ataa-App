import axios from "axios";
import { formatDonationNumber } from "@utils";
import API_URL from "./API_URL";

export default {
  getPendingDonations: async () => {
    try {
      const response = await axios.post(
        API_URL + "donation/getPendingDonations"
      );

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
      console.log(id);
      const data = { id };
      const response = await axios.post(
        API_URL + "donation/cancelDonation",
        data,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      console.log(response.data);

      return response.data.success;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  },
  acceptPendingDonation: async (id) => {
    try {
      const data = { id };
      const response = await axios.post(
        API_URL + "donation/acceptDonation",
        data,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

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
      const data = { id };
      const response = await axios.post(
        API_URL + "donation/declineDonation",
        data,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      return response.data.success;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  },
};
