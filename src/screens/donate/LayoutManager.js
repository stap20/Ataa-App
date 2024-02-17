import { View } from "react-native";
import { layoutStyles } from "@styles/screens/donate";
import DonateView from "./DonateView";
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
        <DonateView {...props} />
      </View>
    </View>
  );
}
