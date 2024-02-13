import { View } from "react-native";
import { layoutStyles } from "@styles/screens/createProfile";
import Header from "./Header";
import { Profile } from "@components";

export default function LayoutManager(props) {
  const styles = layoutStyles();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.mainContainer}>
        <Profile {...props}/>
      </View>
    </View>
  );
}
