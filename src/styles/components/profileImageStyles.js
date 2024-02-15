import { StyleSheet } from "react-native";
import { Theme } from "@theme";

export default profileImageStyles = () => {
  return StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 240,
      backgroundColor: Theme.backgroundColors.profileContainer,
      resizeMode: "cover",
    },
  });
};
