import React from "react";
import { Image, View, TouchableOpacity, Modal } from "react-native";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";
import Icon from "@components/Icon";
import imageShowModalStyle from "@styles/components/imageShowModalStyle";

export default function ImageShowModal(props) {
  const { status, image, onCancel } = props;
  const styles = imageShowModalStyle();

  return (
    <Modal
      animationType="fade"
      visible={status}
      useNativeDriver={true}
      hideModalContentWhileAnimating={true}
      transparent={true}
      onRequestClose={() => onCancel()}
    >
      <View style={styles.contentContainer}>
        <ReactNativeZoomableView
          initialZoom={0.7}
          maxZoom={8}
          minZoom={0.7}
          style={styles.zoomAbleContainer}
        >
          <Image
            source={{ uri: image.image }}
            style={[
              styles.modalImage,
              {
                aspectRatio: image.aspectRatio,
              },
            ]}
          />
        </ReactNativeZoomableView>
        <TouchableOpacity
          style={styles.closeButtonContainer}
          onPress={onCancel}
        >
          <Icon iconName={"modal-close"} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
