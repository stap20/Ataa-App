import { StyleSheet } from "react-native";
import { Theme } from "@theme/index.js";

export default loginStyle = () => {
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
    loginTextContainer: {
      width: "100%",
      alignItems: "center",
      marginBottom: 28,
    },
    loginText: {
      fontWeight: "700",
      fontSize: 20,
      lineHeight: 28,
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
      fontWeight: "500",
      fontSize: 15,
      lineHeight: 22.5,
      color: Theme.typographyColors.secondary,
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
      fontWeight: "500",
      fontSize: 16,
      lineHeight: 22.4,
      color: "#FFFFFF",
    },
    signupContainer: {
      marginTop: 6,
      justifyContent: "center",
      flexDirection: "row",
    },
    createText: {
      fontWeight: "500",
      fontSize: 15,
      lineHeight: 21,
      color: Theme.colors.primary,
    },
    dontText: {
      fontWeight: "300",
      fontSize: 15,
      lineHeight: 22.5,
      color: Theme.typographyColors.secondary,
    },
  });
};
