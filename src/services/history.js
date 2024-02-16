import axios from "axios";
import { formatDonationNumber } from "@utils";
import API_URL from "./API_URL";

export default {
  getHistoryDonations: async () => {
    try {
      const response = await axios.post(
        API_URL + "donation/getHistoryDonations"
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
};
