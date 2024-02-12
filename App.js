import { View, StatusBar, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "@src/navigation";
import { useFonts } from "expo-font";
import { fonts, User } from "@utils";

export default function App() {
  let [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  }

  User.login(
    "احمد صالح",
    "toto@gmail.com",
    "123 456 78",
    null,
    "tyyyuyuyuyuy",
    false
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
