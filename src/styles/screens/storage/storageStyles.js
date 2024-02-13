import { StyleSheet } from "react-native";
import { Theme } from "@theme";

export default storageStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
    },

    cardContainer: {
      padding:20,
      marginBottom: 16,
      borderWidth: 1,
      borderRadius:12,
      borderColor: Theme.colors.cardContainerBorder,
    },
  });
};
