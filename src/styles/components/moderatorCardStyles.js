import { StyleSheet } from "react-native";
import { Theme } from "@theme";

export default moderatorCardStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },

    moderatorDataRow: {
      justifyContent: "space-between",
      flexDirection: "row-reverse",
      paddingBottom: 16,
      marginBottom: 16,
      borderBottomWidth: 1,
      borderBottomColor: Theme.colors.cardContainerBorder,
    },

    moderatorContainer: {
      alignSelf: "center",
      flexDirection: "row-reverse",
    },

    moderatorImage: {
      alignSelf: "center",
      marginLeft: 12,
    },

    moderatorDetailsContainer: {
      alignItems: "flex-end",
    },

    moderatorName: {
      fontFamily: Theme.typography.changa_700,
      fontSize: 16,
      textAlign: "right",
      color: Theme.colors.donateCardText,
    },

    moderatorNumber: {
      fontFamily: Theme.typography.changa_400,
      fontSize: 14,
      textAlign: "right",
      color: Theme.colors.donateCardText,
    },

    actionBtnRow: {
      flex: 1,
      flexDirection: "row-reverse",
    },

    actionBtn: {
      flex: 1,
      height: 40,
      paddingHorizontal: 30,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 100,
    },

    deleteBtn: {
      backgroundColor: Theme.backgroundColors.moderatorDeleteBtn,
    },

    editBtn: {
      marginLeft: 20,
      backgroundColor: Theme.backgroundColors.moderatorEditBtn,
    },

    btnText: {
      fontFamily: Theme.typography.changa_500,
      fontSize: 14,
      textAlign: "center",
      color: Theme.colors.donateActionBtnText,
    },
  });
};
