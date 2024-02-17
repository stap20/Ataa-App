import { formatDonationNumber } from "@utils";
import API from "./API";

export default {
  getHistoryDonations: async () => {
    try {
      const response = await API.post("/donation/getHistoryDonations");

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
