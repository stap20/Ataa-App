import { View } from "react-native";
import { layoutStyles } from "@styles/screens/pending";
import PendingView from "./PendingView";
import Header from "./Header";
import { User } from "@utils";
export default function LayoutManager(props) {
  const styles = layoutStyles();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header profileImage={User.profileImage} />
      </View>
      <View style={styles.mainContainer}>
        <PendingView {...props} />
      </View>
    </View>
  );
}
