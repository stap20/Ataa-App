import { StyleSheet } from "react-native";
import { Theme } from "@theme/index.js";

export default loginStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
      paddingTop: 16 + 50,
      backgroundColor: "white",
    },
    header: {
      justifyContent: "flex-start",
      alignItems: "center",
    },
    imageFrameContainer: {
      aspectRatio: 214 / 181,
      width: 212,
    },
    body: {
      marginTop: 22,
      paddingHorizontal: 8,
    },
    loginTextContainer: {
      width: "100%",
      alignItems: "center",
      marginBottom: 28,
    },
    loginText: {
      fontFamily: Theme.typography.changa_700,
      fontSize: 20,
      color: Theme.typographyColors.primary,
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
    inputsText: {
      flex: 1,
      fontFamily: Theme.typography.changa_500,
      fontSize: 15,
      textAlignVertical: "center",
      color: Theme.typographyColors.primary,
    },
    inputTextContainer: {
      // backgroundColor: "green",
      paddingTop: 0,
      paddingBottom: 0,
      marginVertical: 12,
    },
    countryFlagsContainer: {
      flexDirection: "row-reverse",
      backgroundColor: Theme.backgroundColors.formText,
    },
    actions: {
      marginTop: 16,
      gap: 16,
    },
    forgotContainer: {
      alignSelf: "flex-start",
      marginBottom: 34 - 16,
    },
    forgotText: {
      fontWeight: "500",
      fontSize: 16,
      lineHeight: 22.4,
      color: Theme.colors.primary, // TODO:
    },
    loginBtnContainer: {
      height: 56,
      width: "100%",
      backgroundColor: Theme.colors.primary, // TODO:
      borderRadius: 12,
      justifyContent: "center",
      alignItems: "center",
    },
    loginBtnText: {
      fontFamily: Theme.typography.changa_500,
      fontSize: 16,
      color: Theme.colors.mainBtn,
    },
    signupContainer: {
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
    formTextContainer: {
      marginBottom: 16,
    },
  });
};
