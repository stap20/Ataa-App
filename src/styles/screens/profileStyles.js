import { StyleSheet } from "react-native";
import { Theme } from "@theme";

export default historyStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 24,
      paddingBottom: 10,
    },

    profileImageContainer: {
      alignSelf: "center",
      justifyContent: "flex-end",
      marginBottom: 40,
    },

    cameraIcon: {
      alignSelf: "flex-end",
      position: "absolute",
    },

    profileImage: {
      width: 120,
      height: 120,
      borderRadius: 240,
      backgroundColor: Theme.backgroundColors.profileContainer,
    },

    formTextContainer: {
      marginBottom: 16,
    },

    formBtn: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 50,
      paddingVertical: 16,
      borderRadius: 12,
      backgroundColor: Theme.backgroundColors.mainBtn,
    },

    btnText: {
      fontFamily: Theme.typography.changa_700,
      fontSize: 15,
      lineHeight: 22.5,
      color: Theme.colors.mainBtn,
    },
  });
};
