import { Text, TouchableOpacity, View } from "react-native";
import { headerStyles } from "@styles/screens/profile";

export default function Header({ onLogout = () => {} }) {
  const styles = headerStyles();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onLogout} style={styles.logOutIconContainer}>
        <Text style={styles.logOutText}>تسجيل الخروج</Text>
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{"الملف الشخصي"}</Text>
      </View>
    </View>
  );
}
