import { User, ToastHandler } from "@utils";

const url = process.env.EXPO_PUBLIC_API_URL;

export const getIdCode = () => {
  return url;
};

export default url;
