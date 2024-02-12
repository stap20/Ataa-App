import { Image, Text, TouchableOpacity, View } from "react-native";
import moderatorCardStyles from "@styles/components/moderatorCardStyles";
import Icon from "@components/Icon";

export default function ModeratorCard({ data = {}, style = {} }) {
  const styles = moderatorCardStyles();

  const {
    moderatorName = "أحمد صالح",
    moderatorNumber = "+974 8911 567 234",
    quantity = 10,
    status = "accepted",
    date = new Date(),
    profileImg = null,
  } = data;

  const profileImageSrc =
    profileImg == null
      ? require("@assets/profile-img.png")
      : { uri: profileImg };

  const onEdit = () => {};
  const onDelete = () => {};

  return (
    <View style={[styles.container, style]}>
      <View style={styles.moderatorDataRow}>
        <View style={styles.moderatorContainer}>
          <Image source={profileImageSrc} style={styles.moderatorImage} />
          <View style={styles.moderatorDetailsContainer}>
            <Text style={styles.moderatorName}>{moderatorName}</Text>
            <Text style={styles.moderatorNumber}>{moderatorNumber}</Text>
          </View>
        </View>
        <Icon iconName={"moderator-active"} />
      </View>
      <View style={styles.actionBtnRow}>
        <TouchableOpacity
          style={[styles.actionBtn, styles.editBtn]}
          onPress={onEdit}
        >
          <Text style={styles.btnText}>{"تعديل"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionBtn, styles.deleteBtn]}
          onPress={onDelete}
        >
          <Text style={styles.btnText}>{"حذف"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
