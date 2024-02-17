import { Text, View } from "react-native";
import { headerStyles } from "@styles/screens/donate";
import { ProfileImage } from "@components";

export default function Header({ title, profileImage = null }) {
  const styles = headerStyles();

  return (
    <View style={styles.container}>
      <View style={styles.profileImageContainer}>
        <ProfileImage profileImage={profileImage} width={35} height={35} />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{"إنشاء تبرع"}</Text>
      </View>
    </View>
  );
}
