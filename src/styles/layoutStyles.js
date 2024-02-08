import { StyleSheet } from "react-native";
import { Theme } from "@theme/index.js";

export default layoutStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 16,
    },

    headerContainer: {
      height: 35,
      marginBottom: 18,
      paddingHorizontal: 16,
    },
    mainContainer: { flex: 1 },
  });
};
