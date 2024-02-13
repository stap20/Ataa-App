import { View } from "react-native";
import { layoutStyles } from "@styles/screens/editMessage";
import Header from "./Header";
import EditScreen from "./EditScreen";

export default function LayoutManager(props) {
  const styles = layoutStyles();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.mainContainer}>
        <EditScreen {...props} />
      </View>
    </View>
  );
}
