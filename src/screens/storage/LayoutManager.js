import { View } from "react-native";
import { layoutStyles } from "@styles/screens/history";
import StorageView from "./StorageView";
import Header from "./Header";
import { User } from "@utils";

export default function LayoutManager({ onDelete, ...props }) {
  const styles = layoutStyles();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header profileImage={User.profileImage} onDelete={onDelete} />
      </View>
      <View style={styles.mainContainer}>
        <StorageView {...props} />
      </View>
    </View>
  );
}
