import { TouchableOpacity, View } from "react-native";
import { imageCardStyles } from "@styles/components/imageGalleryViewer";
import Icon from "@components/Icon";

export default function ImageCard({ size, style }) {
  const styles = imageCardStyles();

  return <View style={styles.container}></View>;
}
