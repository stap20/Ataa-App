import { Text, View } from "react-native";
import { headerStyles } from "@styles/screens/createProfile";

export default function Header() {
  const styles = headerStyles();
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{"إنشاء ملف مشرف"}</Text>
      </View>
    </View>
  );
}
