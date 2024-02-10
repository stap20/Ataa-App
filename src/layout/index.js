import { useEffect, useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import layoutStyles from "@styles/layoutStyles";
import Header from "./Header";
import MainNavigation from "@navigation/MainNavigation";

export default function LayoutManager({}) {
  const styles = layoutStyles();
  const navigation = useNavigation();
  const [screenTitle, setScreenTitle] = useState("");

  useEffect(() => {
    const unsubscribe = navigation.addListener("state", () => {
      const currentRoute = navigation.getCurrentRoute();
      setScreenTitle(currentRoute.params?.title || "ُError");
    });
    // Cleanup the listener
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* <View style={styles.headerContainer}>
        <Header title={screenTitle} />
      </View> */}
      <View style={styles.mainContainer}>
        <MainNavigation userType={"User"} />
      </View>
    </View>
  );
}
