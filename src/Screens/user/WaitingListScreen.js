import { StyleSheet, Text, View } from "react-native";

const path = "#CB8949";
const bg = "#EAD0B6";

export default function WaitingListScreen({}) {
  return (
    <View style={styles.container}>
      <Text>WaitingList Page</Text>
      <IconManager name="time_atack" pathFill={path} svgFill={bg} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
