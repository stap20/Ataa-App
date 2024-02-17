import { StyleSheet } from "react-native";
import { Theme } from "@theme";

export default empytPageHandlerStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },

    noDataText: {
      fontFamily: Theme.typography.changa_500,
      fontSize: 20,
      color: Theme.typographyColors.noDataColor,
    },
  });
};
