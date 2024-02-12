import { StyleSheet } from "react-native";
import { Theme } from "@theme";

export default tabBarStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection:'row-reverse',
      height: 70,
      paddingBottom: 10,
      paddingTop: 10,
      paddingRight: 10,
      paddingLeft: 10,
      borderTopWidth: 1,
      borderColor: Theme.colors.tabBarborder,
    },

    screenContainer: {
      backgroundColor: Theme.backgroundColors.screenContainer,
    },

    btnContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },

    btnText: {
      fontFamily: Theme.typography.changa_300,
      fontSize: 12,
    },

    btnIconContainer: {
      width: 24,
      height: 24,
      marginBottom: 4,
      backgroundColor: "black",
      alignSelf: "center",
    },
  });
};
