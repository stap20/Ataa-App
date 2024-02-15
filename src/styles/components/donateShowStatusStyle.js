import { StyleSheet } from "react-native";
import { Theme } from "@theme";

export default donateShowStatusStyle = (status) => {
  return StyleSheet.create({
    contentContainer: {
      flex: 1,
      backgroundColor: "#0000004D",
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      minHeight: 181,
      width: 328,
      backgroundColor: "white",
      borderRadius: 12,
      alignItems: "center",
      paddingVertical: 20,
      paddingHorizontal: 37,
    },
    iconContainer: {
      width: 53,
      height: 53,
      marginBottom: 13,
      justifyContent: "center",
      alignItems: "center",
    },
    statusText: {
      fontFamily: Theme.typography.changa_700,
      fontSize: 18,
      //   marginBottom: 10,
      color:
        status == "success"
          ? Theme.colors.statusSuccessColor
          : Theme.colors.statusFailedColor,
    },
    descriptionText: {
      fontFamily: Theme.typography.changa_700,
      textAlign: "center",
      fontSize: 20,
    },
  });
};
