import { StyleSheet } from "react-native";
import { Theme } from "@theme";

export default actionsStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row-reverse",
    },

    actionBtn: {
      flex: 1,
      height:40,
      paddingHorizontal: 30,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 100,
    },

    cancelBtn: {
      backgroundColor: Theme.backgroundColors.donateCancelBtn,
    },

    acceptBtn: {
      marginLeft: 20,
      backgroundColor: Theme.backgroundColors.donateAcceptBtn,
    },

    declineBtn: {
      backgroundColor: Theme.backgroundColors.donateCancelBtn,
    },

    btnText: {
      fontFamily: Theme.typography.changa_500,
      fontSize: 14,
      textAlign: "center",
      color: Theme.colors.donateActionBtnText,
    },
  });
};
