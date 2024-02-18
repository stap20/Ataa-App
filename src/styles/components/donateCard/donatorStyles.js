import { StyleSheet } from "react-native";
import { Theme } from "@theme";

export default donatorStyles = () => {
  return StyleSheet.create({
    container: {
      alignSelf: "center",
      flexDirection: "row-reverse",
    },

    donatorImage: {
      alignSelf: "center",
      marginLeft: 12,
    },

    donatorDetailsContainer: {
      alignItems: "flex-end",
    },

    donatorName: {
      fontFamily: Theme.typography.changa_700,
      fontSize: 14,
      textAlign: "right",
      color: Theme.colors.donateCardText,
      // backgroundColor: "red",
      maxWidth: 100,
    },

    donationNumber: {
      fontFamily: Theme.typography.changa_400,
      fontSize: 14,
      textAlign: "right",
      color: Theme.colors.donateCardText,
    },
  });
};
