import { ToastAndroid } from "react-native";

export default {
  showToast: (text, isLong = false) => {
    ToastAndroid.show(
      !!text ? text : "No Given Text",
      isLong ? ToastAndroid.LONG : ToastAndroid.SHORT
    );
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
