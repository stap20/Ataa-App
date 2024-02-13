import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { editMessageStyles } from "@styles/screens/editMessage";
import FormText from "@components/FormText";

export default function EditScreen({
  data,
  onSave,
  btnText = "حفظ التعديلات",
}) {
  const styles = editMessageStyles();
  const [isRead, setIsRead] = useState(true);
  const [acceptMessage, setAcceptMessage] = useState("");
  const [rejectMessage, setRejectMessage] = useState("");

  useEffect(() => {
    const {
      acceptMessage = "شكراً لتبرعك!",
      rejectMessage = "حاول مرة أخرى!",
    } = data;

    setAcceptMessage(acceptMessage);
    setRejectMessage(rejectMessage);
  }, []);

  const handleSave = () => {
    setIsRead(true);

    const data = {
      acceptMessage: acceptMessage,
      rejectMessage: rejectMessage,
    };

    onSave(data);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <FormText
          style={styles.formTextContainer}
          placeHolder={"رسالة القبول"}
          text={acceptMessage}
          onChange={setAcceptMessage}
          isRead={isRead}
        />
        <FormText
          style={styles.formTextContainer}
          placeHolder={"رسالة الرفض"}
          text={rejectMessage}
          onChange={setRejectMessage}
          isRead={isRead}
        />
      </ScrollView>

      {isRead ? (
        <TouchableOpacity
          style={styles.formBtn}
          onPress={() => {
            setIsRead(false);
          }}
        >
          <Text style={styles.btnText}>{"تعديل البيانات"}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.formBtn} onPress={handleSave}>
          <Text style={styles.btnText}>{btnText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
