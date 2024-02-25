import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NavigationService from "@navigation/NavigationService";
import API_URL, { getIdCode } from "./API_URL";
import { ToastHandler } from "@utils";
// import { API_URL } from "@services/API_URL";

const API = axios.create({
  baseURL: API_URL,
});

// Add a request interceptor to attach the token to outgoing requests
API.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add a response interceptor to handle token expiration
API.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response) {
      const { status } = error.response;

      // Check if the error status indicates token expiration
      if (status === 401 || status === 403) {
        // Handle token expiration here, e.g., prompt user to log in again
        await AsyncStorage.removeItem("token");
        console.log("Token expired. Please log in again.");
        NavigationService.navigate("login");
      }

      return Promise.reject(error);
    }
  }
);

export const testConnection = async () => {
  try {
    const response = await axios.post(API_URL + "/");

    if (!response) {
      alert("ya5taaaaaaaaaaay v1");
      ToastHandler.showToast(`ya5taaaaaaaaaaaaay: ${response}`, true);
      throw new Error(`the response is ${response}`);
    }

    alert("howa da");
    ToastHandler.showToast(`Connected To ${getIdCode()}`, true);
    return API;
  } catch (error) {
    alert(error);

    if (error.response.status != 401) {
      alert("ya5taaaaaaaaaaay2");
      ToastHandler.showToast(`Connection Error: ${error.message}`, true);

      console.error("Connection Error: ", error);
    }
  }
};

testConnection().catch(() => {
  return;
});

export default API;
