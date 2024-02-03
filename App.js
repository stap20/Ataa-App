import { NavigationContainer } from "@react-navigation/native";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import MainNavigation from "./src/navigation/MainNavigation";
import * as Font from "expo-font";
import { useEffect } from "react";

// const fetchFonts = async () => {
//   console.log("Loading fonts...");
//   await Font.loadAsync({
//     "Changa-Regular": require("./assets/fonts/Changa-Regular.ttf"),
//   });
//   console.log("Fonts loaded!");
// };

export default function App() {
  // useEffect(() => {
  //   fetchFonts();
  // }, []);
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MainNavigation userType={"User"} />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
  },
});
