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
import { ImagePickerHandler, User } from "@utils";

const categoriesData = ["cloth", "school", "games"];

export default function DonateView({ onSave }) {
  const [selectedCategory, setSelectedCategory] = useState({
    index: 0,
    data: User.donationTypes["cloth"]._id,
  });
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const isEnable = !description || !images;
  const styles = donateStyles(isEnable);

  const renderCategoryItem = ({ item, index }) => {
    return (
      <DonateCategory
        type={item}
        index={index}
        onSelect={setSelectedCategory}
        selected={index === selectedCategory.index}
      />
    );
  };

  const onCamera = async () => {
    const newImages = await ImagePickerHandler.takeImages();
    setImages([...images, ...newImages]);
  };
  const onGallery = async () => {
    const newImages = await ImagePickerHandler.pickImages();
    setImages([...images, ...newImages]);
  };

  const removeImage = (id) => {
    setImages([...images.slice(0, id), ...images.slice(id + 1)]);
  };

  const onDonate = () => {
    console.log(selectedCategory.data);
    const data = {
      imagesList: images,
      donationDescription: description,
      quantity: selectedQuantity,
      donationTypeId: selectedCategory.data,
    };
    onSave(data);
    setSelectedCategory({
      index: 0,
      data: null,
    });
    setSelectedQuantity(1);
    setImages([]);
    setDescription("");
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
            <View style={styles.iconUploaderContainer}>
              <TouchableOpacity onPress={() => onCamera()}>
                <Icon iconName={"donate-camera"} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onGallery()}>
                <Icon iconName={"donate-gallery"} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.donateBtnWrapper}>
        <TouchableOpacity
          onPress={() => onDonate()}
          style={styles.donateBtnContainer}
          disabled={isEnable}
        >
          <Text style={styles.donateBtnText}>{`تبرع`}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
