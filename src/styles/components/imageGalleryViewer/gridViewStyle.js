import { StyleSheet } from "react-native";
import { Theme } from "@theme";

export default function gridViewStyle() {
  return StyleSheet.create({
    container: {
      width: 328,
      backgroundColor: "#FFFFFF",
      borderRadius: 8,
      overflow: "hidden",
    },
    moreBackgroundContainer: {
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
  });
}
