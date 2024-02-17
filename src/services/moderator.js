import API from "./API";

export default {
  getModerators: async () => {
    try {
      const response = await API.post("/user/getAllModerators");

      if (response.data.success) {
        return response.data.data.map((item) => {
          return {
            moderatorName: item.name,
            moderatorNumber: `+${item.countryCode} (${item.phoneNumber})`,
            profileImage: item.profileImage,
            id: item._id,
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

  deleteModerator: async (id) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };

      const data = { id };
      const response = await API.post("/user/deleteModerator", data, config);

      return response.data.success;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  },
};
