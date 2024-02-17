import React from "react";
import { Image, View, TouchableOpacity, Modal } from "react-native";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";
import Icon from "@components/Icon";
import profileEditModalStyle from "@styles/components/profileEditModalStyle";
import Profile from "@components/Profile";

export default function ProfileEditModal(props) {
  const { status, onCancel } = props;
  const styles = profileEditModalStyle();

  return (
    <Modal
      animationType="fade"
      visible={status}
      useNativeDriver={true}
      hideModalContentWhileAnimating={true}
      // transparent={true}
      onRequestClose={() => onCancel()}
    >
      <View style={styles.contentContainer}>{/* <Profile  /> */}</View>
    </Modal>
  );
}
