import { Image, Text, View } from "react-native";
import headerStyles from "@styles/headerStyles";

export default function Header({ title, profileImg = null }) {
  const styles = headerStyles();

  const profileImageSrc =
    profileImg == null
      ? require("@assets/profile-img.png")
      : { uri: profileImg };

  return (
    <View style={styles.container}>
      <Image source={profileImageSrc} style={styles.profileImg} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}