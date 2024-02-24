import { User, ToastHandler } from "@utils";

const url = process.env.EXPO_PUBLIC_API_URL;
const desiredPart = url
  .split("https://")[1]
  .split(".ngrok-free.app")[0]
  .split("-")
  .slice(0, 5)
  .join("-");

export const getIdCode = () => {
  return desiredPart;
};

ToastHandler.showToast(`Connectting To ${getIdCode()} abomohammed`, true);

export default url;
