import { FlatList, StyleSheet, View } from "react-native";
import GridView from "./GridView";
import { useState, useEffect } from "react";

export default ImageGridView = (props) => {
  let data = [];
  useEffect(() => {
    for (let index = 0; index < props.data.length; index++) {
      if (index + 1 > 5) {
        data.pop();
        data.push({ ...props.data[index] });
        break;
      } else {
        data.push({ ...props.data[index] });
      }
    }

    // data.push({ size: 82, icon: props.addIcon });
  }, []);

  return (
    <GridView
      removeEnable={props.removeEnable}
      onRemove={(id) => props.onRemove(id)}
      data={data}
      extraData={props.extraData}
      onAdd={props.onAdd}
    ></GridView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 328,
    padding: 4,
    maxHeight: 191,
    backgroundColor: "blue",
    borderRadius: 8,
  },
});
