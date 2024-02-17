import { User, ToastHandler } from "@utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import API from "./API";

export default {
  signup: async ({ name, phoneNumber, countryCode, email, password }) => {
    try {
      const data = { name, phoneNumber, countryCode, email, password };

      const response = await API.post("/signup", data);
      ToastHandler.showToast(response.data.message);
      return response.data.success;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  },
  login: async ({ phoneNumber, countryCode, password }) => {
    try {
      const data = { phoneNumber, countryCode, password };

      const response = await API.post("/login", data);
      if (response.data.success) {
        User.login({ ...response.data.user });

        await AsyncStorage.setItem("user", JSON.stringify(response.data.user));

        const token = response.data.token;

        await AsyncStorage.setItem("token", token);

        const categoriesResponse = await API.post("/category/getAllCategories");

        if (categoriesResponse.data.success) {
          User.setDonationTypes(categoriesResponse.data.data);
        }
      }

      ToastHandler.showToast(response.data.message);

      return response.data.success;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  },
  logout: async (id) => {
    try {
      const data = { id };

      User.logout();
      const response = await API.post("/logout", data);
      if (response.data.success) {
        await AsyncStorage.setItem("user", JSON.stringify(""));

        const token = {};

        await AsyncStorage.setItem("token", JSON.stringify(token));
      }

      ToastHandler.showToast(response.data.message);

      return response.data.success;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  },
};
