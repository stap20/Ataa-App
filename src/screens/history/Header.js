import { Image, Text, View } from "react-native";
import {headerStyles} from "@styles/screens/history";
import { ProfileImage } from "@components";

export default function Header({ title, profileImg = null }) {
  const styles = headerStyles();

  return (
    <View style={styles.container}>
      <ProfileImage profileImg={profileImg} width={35} height={35} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{"السجل"}</Text>
      </View>
    </View>
  );
}
