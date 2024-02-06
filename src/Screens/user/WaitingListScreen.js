import { StyleSheet, Text, View } from "react-native";
import DisplayCard from "../../Components/DisplayCard";
import DisplayCardTemp from "../../Components/DisplayCardTemp";

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
    backgroundColor: "yellow",
    padding: 16,
  },
});
