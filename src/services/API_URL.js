import { User, ToastHandler } from "@utils";

const url = "https://792d-156-192-131-91.ngrok-free.app";
const desiredPart = url
  .split("https://")[1]
  .split(".ngrok-free.app")[0]
  .split("-")
  .slice(0, 5)
  .join("-");

export const getIdCode = () => {
  return desiredPart;
};

ToastHandler.showToast(`Connectting To ${getIdCode()}`, true);

export default url;
