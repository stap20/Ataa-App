import IconManager from "@components/Icons/IconManager";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ImageGroupPicker from "../utils/ImageGroupPicker";

const CardView = (props) => {
  const { size, color, containerStyle } = props;
  const imageStyle = StyleSheet.create({
    container: {
      flex: 1,
      aspectRatio: 1 / 1,
      maxHeight: size,
      backgroundColor: color,
      borderWidth: 1,
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    },
  });
  return (
    <View style={[imageStyle.container, containerStyle]}>
      {props.children}
      {props.removeEnable && (
        <TouchableOpacity
          onPress={() => props.onRemove()}
          style={{
            position: "absolute",
            top: 4,
            left: 4,
            width: 16,
            height: 16,
            borderRadius: 99,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        >
          <IconManager name={"close"} width={15} height={15} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default GridView = (props) => {
  const data = [...props.data];
  const loadItems = ({ item, index }, children) => {
    if (index == props.data.length - 2 && props.extraData - 5 > 0) {
      return (
        <CardView
          containerStyle={props.cardContainerStyle}
          id={item.id}
          size={item?.size || 82}
          color={item?.color || "red"}
          removeEnable={false}
        >
          <View
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
            }}
          />
          <Text style={{ color: "white" }}>
            {`أكثر من ${props.extraData - 4}`}
          </Text>
        </CardView>
      );
    }

    if (index == props.data.length - 1) {
      return (
        <CardView
          containerStyle={props.cardContainerStyle}
          size={item.size}
          color={"#DDDEDF"}
          removeEnable={false}
          onRemove={() => props.onRemove(index)}
        >
          <TouchableOpacity onPress={props.onAdd}>
            <IconManager name={"plus"} color={"black"} width={24} height={24} />
          </TouchableOpacity>
        </CardView>
      );
    }

    return (
      <CardView
        containerStyle={props.cardContainerStyle}
        id={item.id}
        size={item?.size || 82}
        color={item?.color || "red"}
        removeEnable={props.removeEnable}
        onRemove={() => props.onRemove(index)}
      >
        <Image
          style={{
            aspectRatio: item.aspectRatio,
            width: 82,
            resizeMode: "center",
          }}
          source={{ uri: require(item.uri) }}
        />
      </CardView>
    );
  };

  return (
    <View style={[styles.container, props.gridStyle]}>
      <FlatList
        data={props.data}
        extraData={props.extraData}
        renderItem={(item) => loadItems(item, props.children)}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={props.contentContainerStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: 328,
    padding: 4,
    // maxHeight: 191,
    backgroundColor: "blue",
    borderRadius: 8,
  },
});
