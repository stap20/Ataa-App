import { FlatList, View, TouchableOpacity } from "react-native";

import { gridViewStyle } from "@styles/components/imageGalleryViewer";
import ImageCard from "./imageCard";
import { useState } from "react";
const limit = 6;

const filter = (data, isShowMore) => {
  const endIndex = isShowMore ? data.length : Math.min(limit, data.length);
  return data.slice(0, endIndex);
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
  const filteredData = filter(data, isShowMore);
  // console.log(data.length);

  const loadItems = ({ item, index }) => {
    // console.log(index + 1);
    if (
      !isShowMore &&
      index == filteredData.length - 1 &&
      data.length > limit
    ) {
      return (
        <ImageCard
          key={index}
          type={"more"}
          size={82}
          uri={item.image}
          onShowMore={() => setIsShowMore(true)}
          isRemoveEnable={false}
          moreNum={data.length - filteredData.length + 1}
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
