import { View } from "react-native";
import { layoutStyles } from "@styles/screens/moderator";
import ModeratorView from "./ModeratorView";
import Header from "./Header";

export default function LayoutManager(props) {
  const styles = layoutStyles();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.mainContainer}>
        <ModeratorView {...props} />
      </View>
    </View>
  );
}
