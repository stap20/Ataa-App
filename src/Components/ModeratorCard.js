import { Image, Text, TouchableOpacity, View } from "react-native";
import moderatorCardStyles from "@styles/components/moderatorCardStyles";
import Icon from "@components/Icon";
import ProfileImage from "@components/ProfileImage";

export default function ModeratorCard({
  data = {},
  style = {},
  onEdit = () => {},
  onDelete = () => {},
}) {
  const styles = moderatorCardStyles();

  const {
    id,
    moderatorName = "أحمد صالح",
    moderatorNumber = "+974 8911 567 234",
    profileImg = null,
  } = data;

  return (
    <View style={[styles.container, style]}>
      <View style={styles.moderatorDataRow}>
        <View style={styles.moderatorContainer}>
          <View style={styles.moderatorImage}>
            <ProfileImage profileImg={profileImg} width={50} height={50} />
          </View>

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
          onPress={() => {
            onEdit(id, {
              moderatorName,
              moderatorNumber,
              profileImg,
            });
          }}
        >
          <Text style={styles.btnText}>{"تعديل"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionBtn, styles.deleteBtn]}
          onPress={() => {
            onDelete(id);
          }}
        >
          <Text style={styles.btnText}>{"حذف"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
