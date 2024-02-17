import { StyleSheet } from "react-native";
import { Theme } from "@theme";

export default formTextStyles = () => {
  return StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: "row-reverse",
      alignItems: "center",
      paddingTop: 12,
      paddingBottom:12,
      paddingHorizontal: 20,
      borderWidth: 1,
      borderColor: Theme.colors.textBoxContainerBorder,
      borderRadius: 12,
      backgroundColor: Theme.backgroundColors.formText,
    },

    textContainer: {
      flex: 1,
    },

    placeHolder: {
      fontFamily: Theme.typography.changa_500,
      fontSize: 11,
      color: Theme.colors.formTextPlaceHolder,
      textAlign: "right",
    },

    text: {
      width: "100%",
      fontFamily: Theme.typography.changa_400,
      fontSize: 14,
      color: Theme.colors.formText,
      verticalAlign: "middle",
    },

    secureText: {
      width: "100%",
      fontFamily: Theme.typography.changa_700,
      fontSize: 16,
      color: Theme.colors.formText,
    },

    visibleIcon: {
      alignSelf: "center",
      width: 23,
      height: 24,
      marginRight: 10,
      backgroundColor: "blue",
    },
  });
};
