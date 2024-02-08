import { Image, StyleSheet, View } from "react-native";
import IconManager from "./Icons/IconManager";

export default ShowProfileImage = (props) => {
  const {
    size = 120,
    src = require("@assets/profile-img.png"),
    icon = "camera",
  } = props;

  return (
    <View style={styles.profileImageContainer}>
      <View style={[styles.profileImageMask, { height: size }]}>
        <Image style={[styles.profileImage, { height: size }]} source={src} />
        {props.hasOwnProperty("icon") && (
          <View style={styles.setImageIconContainer}>
            <IconManager name={icon} />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileImageContainer: {
    flex: 1,
    // backgroundColor: "lightgreen",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImageMask: {
    aspectRatio: 1 / 1,
    height: 120,
    // overflow: "hidden",
  },
  profileImage: {
    aspectRatio: 1 / 1,
    height: 120,
    borderRadius: 999,
    resizeMode: "center",
    backgroundColor: "#E6E9EA",
  },
  setImageIconContainer: {
    aspectRatio: 1 / 1,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
    borderColor: "#FFFFFF",
    borderWidth: 2,
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "#CB8949",
  },
});
