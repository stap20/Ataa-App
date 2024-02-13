import { StyleSheet } from "react-native";
import { Theme } from "@theme";

export default imageCardStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      aspectRatio: 1 / 1,
      maxHeight: 10,
      backgroundColor: "red",
      borderWidth: 1,
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    },
  });
