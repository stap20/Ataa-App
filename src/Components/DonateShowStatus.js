import { Modal, Pressable, Text, View } from "react-native";
import donateShowStatusStyle from "@styles/components/donateShowStatusStyle";
import Icon from "@components/Icon";

const texts = {
  success: {
    title: "تمت العملية بنجاح",
    description: "شكراً لعطائك!",
  },
  failed: {
    title: "فشلت العملية",
    description: "انتهت هذه الفترة يمكنك التبرع في الفترة القادمة!",
  },
  failed_storage: {
    title: "فشلت العملية",
    description: "لا توجد مساحة كافية في المخزن!",
  },
};

export default DonateShowStatus = (props) => {
  const styles = donateShowStatusStyle(props.status);

  return (
    <Modal
      animationType="fade"
      visible={props.showStatus}
      useNativeDriver={true}
      hideModalContentWhileAnimating={true}
      transparent={true}
      onRequestClose={() => props.reqClose()}
    >
      <Pressable
        onPress={() => props.reqClose()}
        style={styles.contentContainer}
      >
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <Icon iconName={`status-${props.status}`} />
          </View>
          <Text style={styles.statusText}>{texts[props.status].title}</Text>
          <Text style={styles.descriptionText}>
            {texts[props.status].description}
          </Text>
        </View>
      </Pressable>
    </Modal>
  );
};
