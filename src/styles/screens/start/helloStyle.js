import { StyleSheet } from "react-native";
import { Theme } from "@theme/index.js";

export default helloStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 30,
      backgroundColor: "white",
      alignItems: "center",
    },
    welcomeContaienr: {
      marginTop: 95,
      // backgroundColor: "yellow",
      marginHorizontal: 50,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      gap: 12,
    },
    welcomeText: {
      fontFamily: Theme.typography.changa_700,
      fontSize: 24,
      color: Theme.typographyColors.primary,
      textAlign: "center",
    },
    descriptionText: {
      // backgroundColor: "red",
      marginHorizontal: 47,
      fontFamily: Theme.typography.changa_400,
      fontSize: 16,
      color: Theme.typographyColors.primary + "B2",
      textAlign: "center",
    },

    footer: {
      position: "absolute",
      bottom: 30,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
    },
    progressContainer: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 31,
      gap: 8,
    },
    progressDot: {
      width: 6,
      height: 6,
      borderRadius: 999,
    },
    nextBtnContainer: {
      width: 231,
      height: 57,
      borderRadius: 12,
      backgroundColor: Theme.colors.primary,
      justifyContent: "center",
      alignItems: "center",
    },
    nextBtnText: {
      fontFamily: Theme.typography.changa_500,
      fontSize: 16,
      color: Theme.colors.mainBtn,
      textAlign: "center",
    },
  });
};
