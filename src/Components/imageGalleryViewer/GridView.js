import { FlatList, View } from "react-native";

import { gridViewStyle } from "@styles/components/imageGalleryViewer";
import Icon from "@components/Icon";
import ImageCard from "./imageCard";
import { TouchableOpacity } from "react-native-gesture-handler";

export default GridView = ({
  removeEnable,
  onRemove,
  data,
  extraData,
  onAdd,
}) => {
  const styles = gridViewStyle();
  const loadItems = ({ item, index }, children) => {
    if (index == data.length - 2 && extraData - 5 > 0) {
      return <ImageCard />;
    }

    if (index == data.length - 1) {
      return (
        <TouchableOpacity style={{ height:80,backgroundColor:'red' }} onPress={onAdd}>
          {/* <IconManager name={"plus"} color={"black"} width={24} height={24} /> */}
        </TouchableOpacity>
      );
    }

    return (
      // <CardView
      //   containerStyle={cardContainerStyle}
      //   id={item.id}
      //   size={item?.size || 82}
      //   color={item?.color || "red"}
      //   removeEnable={removeEnable}
      //   onRemove={() => onRemove(index)}
      // >
      //   {children}
      // </CardView>

      <ImageCard />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        extraData={extraData}
        renderItem={(item) => loadItems(item)}
        keyExtractor={(item) => item.id}
        numColumns={3}
        // contentContainerStyle={contentContainerStyle}
      />
    </View>
  );
};
