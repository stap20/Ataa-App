import { StyleSheet } from "react-native";
import { Theme } from "@theme";

export default headerStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row-reverse", // handle arabic
    },

    profileImg: {
      position: "absolute",
      width: 35,
      height: 35,
      borderRadius: 60,
      zIndex: 5,
      backgroundColor: Theme.backgroundColors.profileContainer,
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
  });
};
