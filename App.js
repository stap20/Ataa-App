import { View, StatusBar, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "@src/navigation";
import { useFonts } from "expo-font";
import { fonts, User } from "@utils";
import ToastHandler from "./src/utils/ToastHandler";

export default function App() {
  let [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  }

  User.login(
    "احمد صالح",
    "AhmedSaleh@gmail.com",
    "+97412345678",
    null,
    "tyyyuyuyuyuy",
    "user"
  );

  return (
    <View
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
      }}
    >
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </View>
  );
}
