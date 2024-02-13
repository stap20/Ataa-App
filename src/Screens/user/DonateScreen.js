import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import IconManager from "@components/Icons/IconManager";
import { useEffect, useState } from "react";
import GridView from "@components/GridView";
import ImageGridView from "@components/ImageGridView";
import Theme from "@theme/light";
import ImageGroupPicker from "../../utils/ImageGroupPicker";

const CategoryOption = ({ data, index, onSelect, selected = false }) => {
  return (
    <TouchableOpacity
      onPress={() => onSelect(index)}
      style={styles.categoryContainer}
    >
      <View
        style={[
          styles.categoryIconContainer,
          { backgroundColor: selected ? Theme.colors.primary : "#FFFFFF" },
        ]}
      >
        <IconManager
          color={selected ? "#FFFFFF" : "#888888"}
          pathFill={selected ? "#FFFFFF" : "#888888"}
          name={data.icon}
          width={data.size}
          height={data.size}
        />
      </View>
      <Text
        style={[
          styles.categoryText,
          { color: selected ? Theme.colors.primary : "#888888" },
        ]}
      >
        {data.name}
      </Text>
    </TouchableOpacity>
  );
};

export default function DonateScreen({}) {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedQuantity, setSelectedQuantity] = useState(10);
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const categoriesData = [
    { icon: "box", size: 30, name: "تبرع بالملابس" },
    { icon: "box", size: 30, name: "تبرع بالملابس" },
    { icon: "box", size: 30, name: "تبرع بالملابس" },
    { icon: "box", size: 30, name: "تبرع بالملابس" },
    { icon: "box", size: 30, name: "تبرع بالملابس" },
  ];
  const renderCategoryItem = ({ item, index }) => {
    if (index != selectedCategory) {
      return (
        <CategoryOption
          index={index}
          onSelect={setSelectedCategory}
          data={item}
        />
      );
    } else {
      return (
        <CategoryOption
          index={index}
          onSelect={setSelectedCategory}
          data={item}
          selected
        />
      );
    }
  };
  const addImages = async () => {
    setImages([...images, await ImageGroupPicker.pickImages()]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{"إنشاء تبرع"}</Text>
        <IconManager name={"box"} width={24} height={24} />
      </View>
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
          <View style={styles.counterContainer}>
            <TouchableOpacity
              onPress={() => {
                if (selectedQuantity > 1) {
                  setSelectedQuantity(selectedQuantity - 1);
                }
              }}
              style={styles.counter}
            >
              <IconManager name={"minus"} width={16} height={16} />
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
              <IconManager name={"plus"} width={16} height={16} />
            </TouchableOpacity>
          </View>
          <Text>الكمية :</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <TextInput
            style={styles.descriptionInput}
            placeholder="أتبرع بفوض لصالح المحتاجين"
            multiline={true}
            onChangeText={setDescription}
            value={description}
          />
          <ImageGridView
            onRemove={(id) => console.log(id)}
            removeEnable={true}
            data={[...images, { size: 82 }]}
            extraData={images.length}
            onAdd={() => addImages()}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    width: "100%",
    height: 37,
    paddingHorizontal: 16,
    backgroundColor: "#D9D9D966",
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 16,
  },
  titleText: {
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 16.8,
    color: Theme.colors.primary,
  },
  inputContainer: {
    flex: 1,
    gap: 16,
  },
  categoriesContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    height: 117,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 7,
    backgroundColor: "#D9D9D966",
    gap: 16,
  },
  categoryContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
  },
  categoryIconContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
  },

  quantityContainer: {
    flexDirection: "row",
    width: "100%",
    height: 65,
    borderRadius: 12,
    backgroundColor: "#D9D9D966",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 67,
    paddingHorizontal: 16,
  },
  counterContainer: {
    flexDirection: "row",
    width: 95,
    height: 26,
    backgroundColor: "white",
    justifyContent: "space-between",
    borderRadius: 7,
    // overflow: "hidden",
  },
  counter: {
    height: "100%",
    width: 26,
    borderRadius: 7,
    backgroundColor: "#CB8949",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedQuantityText: {
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 16.5,
  },
  descriptionContainer: {
    flex: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: "#D9D9D966",
    padding: 16,
    gap: 34,
    alignItems: "center",
  },
  descriptionInput: {
    width: "100%",
    textAlign: "right",
  },
});
