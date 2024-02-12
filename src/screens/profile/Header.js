import { Text, View } from "react-native";
import { headerStyles } from "@styles/screens/profile";

export default function Header() {
  const styles = headerStyles();
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{"الملف الشخصي"}</Text>
      </View>
    </View>
  );
}
