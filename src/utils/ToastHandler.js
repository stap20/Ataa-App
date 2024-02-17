import { ToastAndroid } from "react-native";

export default {
  showToast: (text) => {
    ToastAndroid.show(!!text ? text : "No Given Text", ToastAndroid.SHORT);
  },

  showToastWithGravity: (text) => {
    ToastAndroid.showWithGravity(
      !!text ? text : "No Given Text",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  },

  showToastWithGravityAndOffset: (text) => {
    ToastAndroid.showWithGravityAndOffset(
      !!text ? text : "No Given Text",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  },
};
