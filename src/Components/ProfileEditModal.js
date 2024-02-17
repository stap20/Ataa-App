import React, { useEffect, useState } from "react";
import { View, Modal } from "react-native";
import profileEditModalStyle from "@styles/components/profileEditModalStyle";
import Profile from "@components/Profile";
import { moderatorHandler, profileHandler } from "@services";

export default function ProfileEditModal(props) {
  const { status, onCancel, id } = props;
  const [data, setData] = useState(null);
  const styles = profileEditModalStyle();
  // console.log(id);
  useEffect(() => {
    moderatorHandler.getModerator(id).then((result) => {
      if (result.success) {
        console.log(result.data);
        setData(result.data);
      }
    });
    // console.log(id);
  }, [id]);

  const onSave = (data) => {
    // console.log("tototototot");
    moderatorHandler.editModerator({ ...data, id: id }).then((result) => {
      if (result.success) {
        setData(result.data);
      }
    });
  };

  return (
    <Modal
      animationType="fade"
      visible={status}
      useNativeDriver={true}
      hideModalContentWhileAnimating={true}
      // transparent={true}
      onRequestClose={() => onCancel()}
    >
      <View style={styles.contentContainer}>
        {data !== null && <Profile data={data} onSave={onSave} />}
      </View>
    </Modal>
  );
}
