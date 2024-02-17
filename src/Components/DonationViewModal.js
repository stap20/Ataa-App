import { Modal, View, TouchableOpacity, Image, Text } from "react-native";
import donationViewModalStyle from "@styles/components/donationViewModalStyle";
import Icon from "@components/Icon";
import Swiper from "react-native-swiper";
import { useEffect, useState } from "react";
import API_URL from "@services/API_URL";

export default DonationViewModal = ({
  status,
  onCancel,
  images = [],
  description,
}) => {
  const styles = donationViewModalStyle();
  const apiPrefix = API_URL + "/download/";

  return (
    <Modal
      animationType="fade"
      visible={status}
      useNativeDriver={true}
      hideModalContentWhileAnimating={true}
      transparent={true}
      onRequestClose={onCancel}
    >
      <View style={styles.container}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
        <View style={styles.imageSwiperContainer}>
          {images.length > 0 && (
            <Swiper containerStyle={styles.wrapper} showsButtons={true}>
              {images.map((image, index) => {
                // console.log(image);
                return (
                  <View key={index} style={styles.slide}>
                    <Image
                      style={styles.image}
                      source={{ uri: apiPrefix + image }}
                    />
                  </View>
                );
              })}
            </Swiper>
          )}
        </View>
        <TouchableOpacity
          style={styles.closeButtonContainer}
          onPress={() => onCancel()}
        >
          <Icon iconName={"modal-close"} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
