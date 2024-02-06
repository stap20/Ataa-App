import { Image, StyleSheet, Text, View } from "react-native";
import ShowProfileImage from "./ShowProfileImage";
import MyUser from "../OurUser";
import IconManager from "./Icons/IconManager";
import StatusCard from "./StatusCard";

export default function DisplayCardTemp({ type = 1 }) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.subsubContainer}>
          <View style={styles.subsubsubContainer}></View>
        </View>
        <View style={styles.sub2Container}>
          <View style={styles.subsub2Container}></View>
        </View>
      </View>
      <View style={styles.s2Container}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    padding: 20,
  },
  subContainer: {
    backgroundColor: "lightgreen",
    height: 50,
    flexDirection: "row-reverse",
  },
  subsubContainer: {
    flex: 1,
    backgroundColor: "purple",
    alignItems: "flex-end",
  },
  sub2Container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "flex-end",
  },
  subsub2Container: {
    width: 20,
    height: 20,
    backgroundColor: "blue",
  },
  subsubsubContainer: {
    width: 20,
    height: 20,
    backgroundColor: "blue",
  },
  s2Container: {
    backgroundColor: "lightblue",
    height: 50,
  },
});
