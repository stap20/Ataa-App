import { Image, Text, TouchableOpacity, View } from "react-native";
import { headerStyles } from "@styles/screens/moderator";

export default function Header({ title, profileImg = null }) {
  const styles = headerStyles();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{"المشرفين"}</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>{"إضافة مشرف"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
