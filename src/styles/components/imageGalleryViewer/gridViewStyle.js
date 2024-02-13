import { StyleSheet } from "react-native";
import { Theme } from "@theme";

export default function gridViewStyle() {
  return StyleSheet.create({
    container: {
      width: 328,
      padding: 4,
      backgroundColor: "blue",
      borderRadius: 8,
    },
    moreBackgroundContainer: {
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
  });
}
