import { StyleSheet } from "react-native";
import { Theme } from "@theme";

export default headerStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row-reverse", // handle arabic
    },

    titleContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },

    title: {
      fontFamily: Theme.typography.changa_700,
      fontSize: 20,
      color: Theme.typographyColors.primary,
    },

    btn: {
      height: 34,
      alignSelf: "flex-start",
      justifyContent: "center",
      alignItems: "center",
      padding: 5,
      borderRadius: 5,
      zIndex: 5,
      backgroundColor: Theme.backgroundColors.trashBtn,
    },

    btnText: {
      textAlign: "center",
      fontFamily: Theme.typography.changa_500,
      fontSize: 12,
      color: Theme.colors.mainBtn,
    },
  });
};
