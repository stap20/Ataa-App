import { StyleSheet, Text, View } from "react-native";
import DisplayCard from "@components/DisplayCard";
import DisplayCardTemp from "@components/DisplayCardTemp";

const path = "#CB8949";
const bg = "#EAD0B6";

export default function WaitingListScreen({}) {
  return (
    <View style={styles.container}>
      <DisplayCardTemp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",

    padding: 16,
  },
});