import { StyleSheet } from "react-native";
import { Theme } from "@theme";

export default imageShowModalStyle = () => {
  return StyleSheet.create({
    contentContainer: {
      flex: 1,
      backgroundColor: "#000000CC",
    },

    closeButtonContainer: {
      position: "absolute",
      alignSelf: "flex-end",
      margin: "5%",
    },

    zoomAbleContainer: {
      alignSelf: "center",
      justifyContent: "center",
    },
    modalImageContainer: {
      borderRadius: 23,
      justifyContent: "center",
      overflow: "hidden",
      backgroundColor: "red",
    },

    modalImage: {
      flex: 1,
      resizeMode: "contain",
      backgroundColor: "black",
      width: "100%",
      // Without height undefined it won't work
      height: undefined,
    },
  });
};
