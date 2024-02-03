import { StyleSheet, Text, View } from "react-native";
import IconManager from "../../Components/Icons/IconManager";

const path = "#CB8949";
const bg = "#EAD0B6";

export default function HistoryScreen({}) {
  return (
    <View style={styles.container}>
      <Text>HistoryScreen Page</Text>
      <IconManager
        name={"history"}
        pathFill={path}
        svgFill={bg}
        // color={"#CB8949"}
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
});
