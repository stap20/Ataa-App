import { useState } from "react";

import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ImageGalleryViewer, DonateCategory, Icon } from "@components";
import { donateStyles } from "@styles/screens/donate";
import { ImagePickerHandler } from "@utils";
import DonateShowStatus from "@components/DonateShowStatus";

const categoriesData = ["cloth", "school", "games"];

export default function DonateView({}) {
  const [showDonateStatus, setShowDonateStatus] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedQuantity, setSelectedQuantity] = useState(10);
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const styles = donateStyles();

  const renderCategoryItem = ({ item, index }) => {
    return (
      <DonateCategory
        type={item}
        index={index}
        onSelect={setSelectedCategory}
        selected={index === selectedCategory}
      />
    );
  };

  const addImages = async () => {
    const newImages = await ImagePickerHandler.pickImages();
    setImages([...images, ...newImages]);
  };
  const removeImage = (id) => {
    setImages([...images.slice(0, id), ...images.slice(id + 1)]);
  };

  const onDonate = () => {
    // API
    setShowDonateStatus(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.categoriesContainer}>
          <FlatList
            data={categoriesData}
            extraData={categoriesData.length}
            horizontal
            inverted
            renderItem={renderCategoryItem}
            contentContainerStyle={{ gap: 14 }}
          />
        </View>
        <View style={styles.quantityContainer}>
          <Text style={styles.quantityTitle}>الكمية :</Text>
          <View style={styles.counterContainer}>
            <TouchableOpacity
              onPress={() => {
                if (selectedQuantity > 1) {
                  setSelectedQuantity(selectedQuantity - 1);
                }
              }}
              style={styles.counter}
            >
              <Icon iconName={"quantity-minus"} />
            </TouchableOpacity>
            <View style={{ justifyContent: "center" }}>
              <Text style={styles.selectedQuantityText}>
                {selectedQuantity}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                if (selectedQuantity < 999) {
                  setSelectedQuantity(selectedQuantity + 1);
                }
              }}
              style={styles.counter}
            >
              <Icon iconName={"quantity-plus"} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <View style={styles.descriptionTextContainer}>
            <TextInput
              style={styles.descriptionInput}
              placeholder="أتبرع بفوض لصالح المحتاجين"
              multiline={true}
              onChangeText={setDescription}
              value={description}
            />
          </View>
          <View style={styles.imageGalleryContainer}>
            <ImageGalleryViewer
              onRemove={(id) => removeImage(id)}
              isRemoveEnable={true}
              imagesList={images}
              onAdd={() => addImages()}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => onDonate()}
        style={styles.donateBtnContainer}
      >
        <Text style={styles.donateBtnText}>{`تبرع`}</Text>
      </TouchableOpacity>
      <DonateShowStatus
        showStatus={showDonateStatus}
        reqClose={() => setShowDonateStatus(false)}
        status={"success"}
      />
    </View>
  );
}
