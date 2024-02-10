import { StyleSheet } from "react-native";
import { Theme } from "@theme";

export default donateCardStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },

    rowContainer: {
      alignItems:'center',
      justifyContent: "space-between",
      flexDirection: "row-reverse",
      paddingBottom: 16,
      marginBottom: 16,
      borderBottomWidth: 1,
      borderBottomColor: Theme.colors.cardContainerBorder,
    },

    statusRowContainer: {
      flexDirection: "row-reverse",
      justifyContent: "space-between",
    },

    dateContainer: {
      flex: 1,
      flexDirection: "row-reverse",
    },

    statusContainer: {
      flex: 1,
    },

    dateText: {
      fontFamily: Theme.typography.changa_400,
      fontSize: 12,
      textAlign: "right",
    },

    dateIconContainer: {
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 8,
    },
  });
};
