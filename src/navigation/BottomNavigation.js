import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import navigationList from "./navigationLists";
import tabBarStyles from "@styles/tabBarStyles";
import { Theme } from "@theme";
import { Icon } from "@components";

const Tab = createBottomTabNavigator();

export default function BottomNavigation({ userType }) {
  const styles = tabBarStyles();

  return (
    <Tab.Navigator
      initialRouteName={navigationList[userType].default}
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
      {navigationList[userType].list.map((item) => (
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
