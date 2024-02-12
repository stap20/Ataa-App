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
      width: 180,
      height: 180,
      borderRadius: 240,
      backgroundColor: Theme.backgroundColors.profileContainer,
    },

    formTextContainer: {
      marginBottom: 16,
    },

    formBtn: {
      height: 56,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 80,
      marginBottom: 50,
      paddingVertical: 16,
      borderRadius: 12,
      backgroundColor: Theme.backgroundColors.mainBtn,
    },

    btnText: {
      fontFamily: Theme.typography.changa_700,
      fontSize: 15,
      color: Theme.colors.mainBtn,
    },
  });
};
