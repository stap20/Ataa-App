import { Text, View } from "react-native";
import { statusChipStyles } from "@styles/components/donateCard";

export default function StatusChip({ status = "accepted" }) {
  const styles = statusChipStyles(status);

  const statusTitles = {
    accepted: "مقبول",
    declined: "مرفوض",
    pending: "قيد الانتظار",
  };

  return (
    <View style={styles.container}>
      <View style={styles.symbol} />
      <Text style={styles.title}>{statusTitles[status]}</Text>
    </View>
  );
}
