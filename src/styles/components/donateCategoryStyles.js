import { StyleSheet } from "react-native";
import { Theme } from "@theme";

export default donateCategoryStyles = (selected) => {
  return StyleSheet.create({
    categoryContainer: {
      // justifyContent: "center",
      alignItems: "center",
      gap: 7,
      // backgroundColor: "red",
      maxWidth: 60,
    },
    categoryIconContainer: {
      width: 50,
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 12,
      backgroundColor: selected ? Theme.colors.primary : "#FFFFFF",
    },
    categoryText: {
      fontFamily: Theme.typography.changa_500,
      fontSize: 10,
      textAlign: "center",
      color: selected ? Theme.colors.primary : "#888888",
    },
  });
};
