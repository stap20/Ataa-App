import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import userNavigationList from "./USER_NAVIGATION_LIST";
import tabBarStyles from "@styles/tabBarStyles";
import { Theme } from "@theme";
import { Icon } from "@components";

const Tab = createBottomTabNavigator();

const navigationList = {
  user: userNavigationList,
};

export default function MainNavigation({ userType }) {
  const styles = tabBarStyles();

  return (
    <Tab.Navigator
      initialRouteName="waiting"
      backBehavior="none"
      sceneContainerStyle={styles.screenContainer}
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.container,
        tabBarLabelStyle: styles.btnText,
        tabBarItemStyle: styles.btnContainer,
        tabBarActiveTintColor: Theme.colors.primary,
      }}
    >
      {navigationList[userType].map((item) => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={item.screen}
          options={{
            tabBarLabel: item.label,
            tabBarIcon: ({ focused }) => (
              <Icon iconName={focused ? item.activeIcon : item.icon} />
            ),
          }}
          initialParams={{ title: item.label }}
        />
      ))}
    </Tab.Navigator>
  );
}
