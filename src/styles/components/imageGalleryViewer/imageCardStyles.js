import { StyleSheet } from "react-native";
import { Theme } from "@theme";

export default imageCardStyles = (size) =>
  StyleSheet.create({
    container: {
      flex: 1,
      aspectRatio: 1 / 1,
      maxHeight: size,
      // borderWidth: 1,
      // overflow: "hidden",
    },
    imageStyle: {
      backgroundColor: "#00000066",
      width: "100%",
      height: "100%",
      resizeMode: "cover",
    },
    moreCardContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    moreCard: {
      width: "100%",
      height: "100%",
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#000000CC",
      // backgroundColor: "red",
    },
    moreCardText: {
      fontFamily: Theme.typography.changa_400,
      fontSize: 16,
      color: "white",
    },
    plusCardContainer: {
      flex: 1,
      height: 82,
      backgroundColor: Theme.colors.addImageColor,
      justifyContent: "center",
      alignItems: "center",
    },
    normalCardContainer: {
      flex: 1,
      height: 82,
      justifyContent: "center",
      alignItems: "center",
    },
    removeIconContainer: {
      position: "absolute",
      top: 4,
      left: 4,
      width: 16,
      height: 16,
      borderRadius: 99,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
  });
