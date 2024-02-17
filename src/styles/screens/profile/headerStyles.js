import { StyleSheet } from "react-native";
import { Theme } from "@theme";

export default headerStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row", // handle arabic
    },

    profileImg: {
      position: "absolute",
      width: 35,
      height: 35,
      borderRadius: 60,
      zIndex: 5,
      backgroundColor: Theme.backgroundColors.profileContainer,
    },

    logOutIconContainer: {
      position: "absolute",
      // width: 35,
      height: 35,
      justifyContent: "center",
      zIndex: 5,
      // backgroundColor: "red",
    },

    logOutText: {
      fontFamily: Theme.typography.changa_500,
      color: Theme.colors.primary,
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
