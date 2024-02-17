import React, { useEffect } from "react";
import { View, StatusBar, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NavigationService from "@navigation/NavigationService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Navigation from "@src/navigation";
import { useFonts } from "expo-font";
import { fonts, User } from "@utils";

export default function App() {
  let [fontsLoaded] = useFonts(fonts);

  useEffect(() => {
    // Load user data from AsyncStorage when the component mounts
    const loadUserData = async () => {
      try {
        const userDataString = await AsyncStorage.getItem("user");
        if (userDataString) {
          const userData = JSON.parse(userDataString);
          User.login(userData);
        }
      } catch (error) {
        console.error("Error loading user data:", error);
      }
    };

    loadUserData();
  }, []); // Empty dependency array to run only once when the component mounts

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
      <NavigationContainer ref={NavigationService.setTopLevelNavigator}>
        <Navigation />
      </NavigationContainer>
    </View>
  );
}
