import { View, StatusBar, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import LayoutManager from "@src/layout";
import { useFonts } from "expo-font";
import { fonts } from "@utils";

export default function App() {
  let [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  }
  return (
    <View
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
      }}
    >
      <NavigationContainer>
        <LayoutManager />
      </NavigationContainer>
    </View>
  );
}
