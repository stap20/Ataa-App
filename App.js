import React, { useEffect, useState } from "react";
import { View, Text, I18nManager } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NavigationService from "@navigation/NavigationService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Navigation from "@src/navigation";
import { useFonts } from "expo-font";
import { fonts, User, LoadingContextHandler } from "@utils";
import { testConnection } from "@services/API";
import LoadingHandler from "@components/LoadingHandler";

const ShowLoadingModalContext = LoadingContextHandler.ShowLoadingModalContext;

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

export default function App() {
  let [fontsLoaded] = useFonts(fonts);
  const [showLoading, setShowLoading] = useState(false);
  const [connected, setConnected] = useState(false);
  // const [apiUrl, setApiUrl] = useState("");

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

    const initializeApp = async () => {
      try {
        await testConnection(); // Wait for testConnection to complete
        setConnected(true); // Set connected state to true if testConnection succeeds
      } catch (error) {
        alert(error);
        console.error("Connection Error:", error);
        setConnected(false); // Set connected state to false if testConnection fails
      } finally {
        setShowLoading(false); // Hide loading screen once testConnection is complete
      }
    };

    loadUserData();
    initializeApp();
  }, []); // Empty dependency array to run only once when the component mounts

  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  }

  if (!connected) {
    return <Text>Connection Error</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        // marginTop: StatusBar.currentHeight,
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
