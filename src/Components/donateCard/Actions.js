import { Image, Text, TouchableOpacity, View } from "react-native";
import { actionsStyles } from "@styles/components/donateCard";

export default function Actions({
  isAdmin,
  onCancel = () => {},
  onAccept = () => {},
  onDecline = () => {},
}) {
  const styles = actionsStyles();

  const CancelBtn = () => (
    <TouchableOpacity
      style={[styles.actionBtn, styles.cancelBtn]}
      onPress={onCancel}
    >
      <Text style={styles.btnText}>{"إلغاء"}</Text>
    </TouchableOpacity>
  );

  const AdminBtns = () => (
    <>
      <TouchableOpacity
        style={[styles.actionBtn, styles.acceptBtn]}
        onPress={onAccept}
      >
        <Text style={styles.btnText}>{"قبول"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.actionBtn, styles.declineBtn]}
        onPress={onDecline}
      >
        <Text style={styles.btnText}>{"رفض"}</Text>
      </TouchableOpacity>
    </>
  );

  return (
    <View style={styles.container}>
      {isAdmin ? <AdminBtns /> : <CancelBtn />}
    </View>
  );
}
