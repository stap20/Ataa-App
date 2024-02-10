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
      fontWeight: "500",
      fontSize: 13,
      lineHeight: 19.5,
      textAlign: "right",
      color: Theme.typographyColors.primary,
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
      fontWeight: "500",
      fontSize: 16,
      lineHeight: 22.4,
      color: "#FFFFFF",
    },
    loginContainer: {
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
