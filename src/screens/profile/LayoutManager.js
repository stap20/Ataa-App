import { View } from "react-native";
import { layoutStyles } from "@styles/screens/profile";
import Header from "./Header";
import { Profile } from "@components";
import { User } from "@utils";

export default function LayoutManager(props) {
  const styles = layoutStyles();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header onLogout={props.onLogout} />
      </View>
      <View style={styles.mainContainer}>
        <Profile {...props} />
      </View>
    </View>
  );
}
