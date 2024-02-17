import AsyncStorage from "@react-native-async-storage/async-storage";

const Storage = {
  storeData: async (key, value, callBackError) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
      console.error(e);
      callBackError();
      return e;
    }
  },

  getData: async (key, callBackError) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      console.error(e);
      callBackError();
      return e;
    }
  },
};

export default Storage;
