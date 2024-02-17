import React, { useEffect, createContext, useContext, useState } from "react";
import { View, StatusBar, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NavigationService from "@navigation/NavigationService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Navigation from "@src/navigation";
import { useFonts } from "expo-font";
import { fonts, User, LoadingContextHandler } from "@utils";
import LoadingHandler from "@components/LoadingHandler";

const ShowLoadingModalContext = LoadingContextHandler.ShowLoadingModalContext;

export default function App() {
  let [fontsLoaded] = useFonts(fonts);
  const [showLoading, setShowLoading] = useState(false);

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
      <ShowLoadingModalContext.Provider
        value={{
          showLoading,
          setShowLoading,
        }}
      >
        <NavigationContainer ref={NavigationService.setTopLevelNavigator}>
          <Navigation />
        </NavigationContainer>
      </ShowLoadingModalContext.Provider>
      <LoadingHandler
        status={showLoading}
        onImmediateBreak={() => setShowLoading(false)}
      />
    </View>
  );
}
