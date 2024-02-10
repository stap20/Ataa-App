import { Modal, View } from "react-native";
import HelloScreen from "./Hello";

export default OnBoardScreen = (props) => {
  const reqClose = () => {
    props.onClose();
  };

  return (
    <Modal
      animationType="fade"
      visible={props.status}
      useNativeDriver={true}
      hideModalContentWhileAnimating={true}
      backdropColor={"white"}
      onRequestClose={() => reqClose()}
    >
      <HelloScreen onClose={() => reqClose()} />
    </Modal>
  );
};
