import { StyleSheet } from "react-native";
import { Theme } from "@theme";

export default donateStyles = (isEnable) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    categoriesContainer: {
      flexDirection: "row",
      justifyContent: "flex-end",
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 15,
      marginBottom: 16,
      backgroundColor: "#D9D9D966",
    },

    inputContainer: {
      flex: 1,
    },

    quantityContainer: {
      flexDirection: "row-reverse",
      borderRadius: 12,
      paddingVertical: 20,
      paddingHorizontal: 16,
      marginBottom: 16,
      backgroundColor: "#D9D9D966",
      justifyContent: "flex-start",
      alignItems: "center",
    },

    quantityTitle: {
      marginLeft: 62,
      fontFamily: Theme.typography.changa_400,
      fontSize: 16,
      color: Theme.typographyColors.primary,
    },

    counterContainer: {
      flexDirection: "row",
      width: 95,
      height: 26,
      backgroundColor: "white",
      justifyContent: "space-between",
      borderRadius: 7,
      // overflow: "hidden",
    },

    counter: {
      height: "100%",
      width: 26,
      borderRadius: 7,
      backgroundColor: "#CB8949",
      justifyContent: "center",
      alignItems: "center",
    },
    selectedQuantityText: {
      fontFamily: Theme.typography.changa_400,
      fontSize: 15,
      color: Theme.typographyColors.primary,
    },
    descriptionContainer: {
      flex: 1,
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      backgroundColor: "#D9D9D966",
      // backgroundColor: "blue",
      // justifyContent: "center",
      // alignItems: "flex-start",
      padding: 16,
    },
    descriptionInput: {
      fontFamily: Theme.typography.changa_400,
      fontSize: 13,
      color: Theme.typographyColors.primary,

      width: "100%",
      textAlign: "right",
    },

    descriptionTextContainer: {
      maxHeight: 150,
      marginBottom: 34,
      // backgroundColor: "yellow",
    },

    imageGalleryContainer: {
      flex: 1,
      justifyContent: "space-between",
      // backgroundColor: "red",
    },
    iconUploaderContainer: {
      justifyContent: "flex-end",
      flexDirection: "row",
      height: 30,
      gap: 10,
    },

    donateBtnWrapper: {
      backgroundColor: "#D9D9D966",
      paddingHorizontal: 24,
      paddingBottom: 16,
    },
    donateBtnContainer: {
      height: 56,
      borderRadius: 12,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: !isEnable
        ? Theme.colors.primary
        : Theme.colors.primary + "80",
    },
    donateBtnText: {
      fontFamily: Theme.typography.changa_700,
      fontSize: 18,
      color: "#FFFFFF",
    },
  });
};
