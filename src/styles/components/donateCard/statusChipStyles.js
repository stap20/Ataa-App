import { StyleSheet } from "react-native";
import { Theme } from "@theme";

export default statusChipStyles = (status) => {
  const colors = {
    accepted: {
      color: Theme.colors.statusAcceptedColor,
      backgroundColorDegree: "1A",
    },
    declined: {
      color: Theme.colors.statusDeclinedColor,
      backgroundColorDegree: "1A",
    },
    canceled: {
      color: Theme.colors.statusDeclinedColor,
      backgroundColorDegree: "1A",
    },
    pending: {
      color: Theme.colors.statusPendingColor,
      backgroundColorDegree: "33",
    },
  };

  return StyleSheet.create({
    container: {
      paddingHorizontal: 8,
      paddingVertical: 2,
      alignSelf: "flex-start",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row-reverse",
      backgroundColor:
        colors[status].color + colors[status].backgroundColorDegree,
      borderRadius: 6,
    },

    symbol: {
      width: 7,
      height: 7,
      borderRadius: 14,
      marginLeft: 8,
      backgroundColor: colors[status].color,
    },

    title: {
      fontFamily: Theme.typography.changa_500,
      fontSize: 10,
      textAlign: "left",
      color: colors[status].color,
    },
  });
};
