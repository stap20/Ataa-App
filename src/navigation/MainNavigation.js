import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import bottomTabs from "./TAB_LIST";
import IconManager from "@components/Icons/IconManager";

const Tab = createBottomTabNavigator();

export default function MainNavigation({ userType }) {
  return (
    <Tab.Navigator
      backBehavior="none"
      sceneContainerStyle={{ backgroundColor: "#FFFFFF" }}
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: {
          width: 40,
        },
        tabBarActiveTintColor: "#e91e63",
      }}
    >
      {bottomTabs(userType).map((item) => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={item.screen}
          options={{
            tabBarLabel: item.label,
            tabBarIcon: ({ focused, color, size }) => {
              const path = "#CB8949";
              const bg = "#EAD0B6";
              return (
                <>
                  {!focused ? (
                    <IconManager name={item.icon} width={size} height={size} />
                  ) : (
                    <IconManager
                      name={item.icon}
                      width={size}
                      height={size}
                      pathFill={path}
                      svgFill={bg}
                    />
                  )}
                </>
              );
            },
          }}
          initialParams={{ title: item.label }}
        />
      ))}
    </Tab.Navigator>
  );
}
