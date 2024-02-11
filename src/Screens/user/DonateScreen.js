import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import IconManager from "@components/Icons/IconManager";
import { useEffect, useState } from "react";
import GridView from "@components/GridView";
import ImageGridView from "@components/ImageGridView";

const path = "#CB8949";
const bg = "#EAD0B6";

export default function DonateScreen({}) {
  const data = [
    { id: 1, size: 82, color: "red" },
    { id: 1, size: 82, color: "red" },
    { id: 1, size: 82, color: "red" },
    { id: 1, size: 82, color: "red" },
    { id: 1, size: 82, color: "red" },
    { id: 1, size: 82, color: "red" },
    { id: 1, size: 82, color: "red" },
  ];

  return (
    <View style={styles.container}>
      <ImageGridView
        onRemove={(id) => console.log(id)}
        removeEnable={true}
        data={data}
        extraData={data.length}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imagesContainer: {
    flex: 1,
    width: 328,
    padding: 4,
    maxHeight: 191,
    backgroundColor: "blue",
    borderRadius: 8,
  },
});
