import { StyleSheet } from "react-native";
import { Theme } from "@theme";

export default imageGalleryViewerStyle = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: 328,
      padding: 4,
      maxHeight: 191,
      backgroundColor: "blue",
      borderRadius: 8,
    },
    imageStyle: {
      aspectRatio: 1 / 1,
      width: 82,
      resizeMode: "center",
    },
  });
