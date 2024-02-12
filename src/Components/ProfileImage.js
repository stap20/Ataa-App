import { Image, View } from "react-native";
import profileImageStyles from "@styles/components/profileImageStyles";
import Icon from "@components/Icon";

export default function ProfileImage({
  profileImage = null,
  width = 35,
  height = 35,
}) {
  const styles = profileImageStyles();

  return profileImage !== null ? (
    <Image
      source={{ uri: profileImage }}
      style={[styles.container, { width: width, height: height }]}
    />
  ) : (
    <View style={[styles.container, { width: width, height: height }]}>
      <Icon
        iconName={"profile-image"}
        iconWidth={width * 0.8}
        iconHeight={width * 0.8}
      />
    </View>
  );
}
