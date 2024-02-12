import { View } from "react-native";
import { layoutStyles } from "@styles/screens/history";
import HistoryView from "./HistoryView";
import Header from "./Header";

export default function LayoutManager(props) {
  const styles = layoutStyles();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.mainContainer}>
        <HistoryView {...props} />
      </View>
    </View>
  );
}
