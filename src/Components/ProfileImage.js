import { Image, View } from "react-native";
import profileImageStyles from "@styles/components/profileImageStyles";
import Icon from "@components/Icon";
import API_URL from "@services/API_URL";

export default function ProfileImage({
  profileImage = null,
  width = 35,
  height = 35,
}) {
  const styles = profileImageStyles();

  const isLocal = profileImage !== null && profileImage.includes("file://");
  const apiPrefix = API_URL + "/download/";

  return profileImage !== null ? (
    <Image
      source={{ uri: isLocal ? profileImage : apiPrefix + profileImage }}
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
