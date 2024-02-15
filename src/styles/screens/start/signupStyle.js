import { StyleSheet } from "react-native";
import { Theme } from "@theme/index.js";

export default signupStyle = (agreed) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
      paddingTop: 16,
      backgroundColor: "white",
    },
    header: {
      // flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
    },
    imageFrameContainer: {
      aspectRatio: 214 / 181,
      width: 212,
    },
    body: {
      // flex: 2,
      marginTop: 22,
      paddingHorizontal: 8,
    },
    signupTextContainer: {
      width: "100%",
      alignItems: "center",
      marginBottom: 28,
    },
    signupText: {
      fontFamily: Theme.typography.changa_700,
      fontSize: 20,
      color: Theme.typography.primary,
    },
    inputs: {
      gap: 16,
    },
    inputContainer: {
      height: 56,
      width: "100%",
      backgroundColor: "#F9FAFA", // TODO:
      borderRadius: 12,
      borderColor: "#E6E9EA", // TODO:
      borderWidth: 1,
      gap: 16,
      // justifyContent: "center",

      paddingHorizontal: 16,
    },
    inputTextContainer: {
      paddingTop: 0,
      paddingBottom: 0,
      marginVertical: 12,
    },
    inputsText: {
      flex: 1,
      fontFamily: Theme.typography.changa_500,
      fontSize: 15,
      color: Theme.typographyColors.primary,
    },
    countryFlagsContainer: {
      flexDirection: "row-reverse",
      backgroundColor: Theme.backgroundColors.formText,
    },
    actions: {
      marginTop: 16,
      gap: 16,
    },
    checkboxContainer: {
      flexDirection: "row-reverse",
      gap: 16,
    },
    checkbox: {
      width: 24,
      height: 24,
      borderWidth: 1.5,
      borderRadius: 8,
      borderColor: agreed ? Theme.colors.primary : Theme.colors.secondary,
      backgroundColor: agreed ? Theme.colors.primary : null,
    },
    checkboxText: {
      fontFamily: Theme.typography.changa_500,
      fontSize: 13,
      color: Theme.typography.primary,

      textAlign: "right",
    },

    signupBtnContainer: {
      height: 56,
      width: "100%",
      backgroundColor: Theme.colors.primary, // TODO:
      borderRadius: 12,
      justifyContent: "center",
      alignItems: "center",
    },
    signupBtnText: {
      fontFamily: Theme.typography.changa_500,
      fontSize: 16,
      color: Theme.colors.mainBtn,
    },
    loginContainer: {
      marginTop: 6,
      justifyContent: "center",
      flexDirection: "row",
    },
    createText: {
      fontFamily: Theme.typography.changa_500,
      fontSize: 15,
      color: Theme.colors.primary,
    },
    dontText: {
      fontFamily: Theme.typography.changa_300,
      fontSize: 15,
      color: Theme.colors.formTextPlaceHolder,
    },
  });
};
