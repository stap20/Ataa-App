import { Image, Text, TouchableOpacity, View } from "react-native";
import { imageCardStyles } from "@styles/components/imageGalleryViewer";
import Icon from "@components/Icon";

const MainContent = ({
  type,
  uri,
  styles,
  onShowMore,
  onShowLess,
  onAdd,
  extraData,
  onShowImage,
}) => {
  switch (type) {
    case "normal":
      // console.log(uri);
      return (
        <TouchableOpacity
          onPress={() => onShowLess()}
          onLongPress={() => onShowImage()}
          style={styles.normalCardContainer}
        >
          {!!uri && <Image style={styles.imageStyle} source={{ uri: uri }} />}
        </TouchableOpacity>
      );
      break;
    case "more":
      return (
        <TouchableOpacity
          onPress={() => onShowMore()}
          style={styles.moreCardContainer}
        >
          {!!uri && <Image style={styles.imageStyle} source={{ uri: uri }} />}
          <View style={styles.moreCard}>
            <Text style={styles.moreCardText}>{`أكثر من ${
              extraData - 4
            }`}</Text>
          </View>
        </TouchableOpacity>
      );
      break;
    case "plus":
      return (
        <TouchableOpacity style={styles.plusCardContainer} onPress={onAdd}>
          <Icon iconName={"donate-plus"} />
        </TouchableOpacity>
      );
      break;

    default:
      break;
  }
};

export default function ImageCard({
  size,
  type,
  style = {},
  onAdd,
  onRemove,
  uri,
  isRemoveEnable,
  extraData,
  onShowMore,
  onShowLess,
  onShowImage,
}) {
  const styles = imageCardStyles(size);

  return (
    <View style={[styles.container, style]}>
      <MainContent
        type={type}
        styles={styles}
        onAdd={onAdd}
        uri={uri}
        onShowMore={onShowMore}
        onShowLess={onShowLess}
        onShowImage={onShowImage}
        extraData={extraData}
      />
      {isRemoveEnable && (
        <TouchableOpacity
          onPress={() => onRemove()}
          style={styles.removeIconContainer}
        >
          <Icon iconName={"donate-cancel"} />
        </TouchableOpacity>
      )}
    </View>
  );
}
