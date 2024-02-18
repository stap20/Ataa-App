import React, { useEffect, createContext, useContext, useState } from "react";
import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  I18nManager,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NavigationService from "@navigation/NavigationService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Navigation from "@src/navigation";
import { useFonts } from "expo-font";
import { fonts, User, LoadingContextHandler } from "@utils";
import LoadingHandler from "@components/LoadingHandler";

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

const ShowLoadingModalContext = LoadingContextHandler.ShowLoadingModalContext;
import axios from "axios";

export default function App() {
  let [fontsLoaded] = useFonts(fonts);
  const [showLoading, setShowLoading] = useState(false);
  // const [apiUrl, setApiUrl] = useState("");

  useEffect(() => {
    const fetchApiUrl = async () => {
      try {
        // console.log("234567");
        // Fetch content of the publicly accessible text file from Google Drive
        let response = await axios.get(
          "https://raw.githubusercontent.com/Ryzentx16/temp-Apiurl/main/apiurl.txt"
        );
        const apiUrl = "https://792d-156-192-131-91.ngrok-free.app";
        // console.log(apiUrl);
        User.setApiUrl(apiUrl);
        // setApiUrl(apiUrl);
      } catch (error) {
        console.error("Error fetching API URL:", error);
      }
    };
    fetchApiUrl();

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

    // Set up interval to fetch API URL every 60 seconds
    const interval = setInterval(fetchApiUrl, 5 * 1000);

    // Clear interval on component unmount to avoid memory leaks
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run only once when the component mounts

  if (!fontsLoaded) {
    return <Text>Loading</Text>;
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
