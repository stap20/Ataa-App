import { StyleSheet } from "react-native";
import { Theme } from "@theme";

export default donationViewModalStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000000CC",
      justifyContent: "center",
    },

    closeButtonContainer: {
      position: "absolute",
      top: 0,
      alignSelf: "flex-end",
      margin: "4%",
    },

    descriptionContainer: {
      marginTop: 70,
      height: 190,
      marginHorizontal: 42,
      paddingBottom: 15,
    },
    descriptionText: {
      flex: 1,
      fontFamily: Theme.typography.changa_400,
      color: "#FFFFFF",
      fontSize: 16,
      textAlign: "auto",
      textAlignVertical: "bottom",
    },

    imageSwiperContainer: {
      //   flex: 1,
      aspectRatio: 1 / 1,
      width: "100%",
      //   backgroundColor: "black",
      marginBottom: "auto",
    },

    wrapper: {
      width: "100%",
      height: 50,
      backgroundColor: "black",
    },
    slide: {
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: "100%",
      height: "100%",
      resizeMode: "contain",
    },
  });
};
