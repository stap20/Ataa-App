import { StyleSheet } from "react-native";
import { Theme } from "@theme";

export default headerStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row-reverse", // handle arabic
    },

    btn: {
      height:33,
      position: "absolute",
      alignSelf: "flex-start",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 10,
      borderRadius: 5,
      zIndex: 5,
      backgroundColor: Theme.backgroundColors.mainBtn,
    },

    btnText: {
      textAlign: "center",
      fontFamily: Theme.typography.changa_500,
      fontSize: 12,
      color: Theme.colors.mainBtn,
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
