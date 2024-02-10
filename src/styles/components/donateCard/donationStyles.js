import { StyleSheet } from "react-native";
import { Theme } from "@theme";

export default donationStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: "row-reverse",
    },

    donationDetailsContainer: {
      paddingTop: 5,
      alignItems: "flex-end",
    },

    quantityContainer: {
      flex: 1,
      alignItems: "center",
      flexDirection: "row-reverse",
    },

    donationIconContainer: {
      width: 50,
      height: 50,
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 12,
      borderRadius: 10,
      backgroundColor: "#CB8949",
    },

    donationTypeText: {
      fontFamily: Theme.typography.changa_700,
      fontSize: 10,
      textAlign: "right",
    },

    quantityTitle: {
      fontFamily: Theme.typography.changa_700,
      fontSize: 10,
      textAlign: "right",
      color: Theme.colors.donateCardText,
    },

    quantityText: {
      fontFamily: Theme.typography.changa_400,
      fontSize: 15,
      textAlign: "right",
      color: Theme.colors.donateCardText,
    },
  });
};
