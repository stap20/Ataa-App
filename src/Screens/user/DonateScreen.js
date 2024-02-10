import { StyleSheet, Text, View } from "react-native";
import { IconManager } from "@components/Icons/IconManager";

const path = "#CB8949";
const bg = "#EAD0B6";

export default function DonateScreen({}) {
  return (
    <View style={styles.container}>
      <Text>DonateScreen Page</Text>
      <IconManager name="box" pathFill={path} svgFill={bg} />
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
