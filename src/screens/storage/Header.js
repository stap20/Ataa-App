import { Image, Text, TouchableOpacity, View } from "react-native";
import { headerStyles } from "@styles/screens/storage";
import { ProfileImage, Icon } from "@components";

export default function Header({ title, profileImg = null, onDelete }) {
  const styles = headerStyles();

  return (
    <View style={styles.container}>
      <ProfileImage profileImg={profileImg} width={35} height={35} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{"المخزن"}</Text>
      </View>

      <TouchableOpacity
        style={styles.btn}
        onPress={onDelete}
      >
        <Icon iconName={"delete-storage"} />
      </TouchableOpacity>
    </View>
  );
}
