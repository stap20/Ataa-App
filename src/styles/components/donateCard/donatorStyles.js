import { StyleSheet } from "react-native";
import { Theme } from "@theme";

export default donatorStyles = () => {
  return StyleSheet.create({
    container: {
      alignSelf: "center",
      flexDirection: "row-reverse",
    },

    donatorImage: {
      width: 50,
      height: 50,
      alignSelf: "center",
      marginLeft: 12,
      borderRadius: 100,
      backgroundColor: Theme.backgroundColors.profileContainer,
    },

    donatorDetailsContainer: {
      alignItems: "flex-end",
    },

    donatorName: {
      fontFamily: Theme.typography.changa_700,
      fontSize: 16,
      textAlign: "right",
      color: Theme.colors.donateCardText,
    },

    donationNumber: {
      fontFamily: Theme.typography.changa_400,
      fontSize: 14,
      textAlign: "right",
      color: Theme.colors.donateCardText,
    },
  });
};
