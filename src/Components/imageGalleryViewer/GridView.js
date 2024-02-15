import { FlatList, View, TouchableOpacity } from "react-native";

import { gridViewStyle } from "@styles/components/imageGalleryViewer";
import Icon from "@components/Icon";
import ImageCard from "./imageCard";
import { useState } from "react";

const filterItems = (items, limit) => {
  const out = [];
  for (let index = 0; index < items.length; index++) {
    const element = items[index];
    if (element.hasOwnProperty("size")) {
      out.push(element);
    }
    if (index >= limit - 1) {
      out.push({
        type: "more",
        data: element,
      });
      break;
    } else {
      out.push({
        type: "normal",
        data: element,
      });
    }
  }
  return out;
};

export default GridView = ({
  isRemoveEnable,
  onRemove,
  data,
  extraData,
  onAdd,
  onShowImage,
}) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const styles = gridViewStyle(isShowMore);
  const filteredData = [
    ...data.slice(0, isShowMore ? extraData : 5),
    { size: 82 },
  ];

  const loadItems = ({ item, index }) => {
    // console.log("item");
    if (index == filteredData.length - 1) {
      return (
        <ImageCard
          key={index}
          type={"plus"}
          size={82}
          isRemoveEnable={false}
          onAdd={() => onAdd()}
        />
      );
    }
    if (index == filteredData.length - 2 && index >= 4 && !isShowMore) {
      return (
        <ImageCard
          key={index}
          type={"more"}
          size={82}
          uri={item.image}
          onShowMore={() => setIsShowMore(true)}
          isRemoveEnable={false}
          extraData={extraData}
        />
      );
    } else {
      return (
        <ImageCard
          key={index}
          type={"normal"}
          size={82}
          uri={item.image}
          onShowLess={() => setIsShowMore(false)}
          onShowImage={() => onShowImage(item)}
          isRemoveEnable={isRemoveEnable}
          onRemove={() => onRemove(index)}
        />
      );
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredData}
        extraData={extraData}
        renderItem={(item) => loadItems(item)}
        keyExtractor={(item) => item.id}
        numColumns={3}
      />
    </View>
  );
};
