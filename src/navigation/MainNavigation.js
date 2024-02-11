import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import bottomTabs from "./TAB_LIST";
import IconManager from "@components/Icons/IconManager";
import LoginScreen from "@screens/start/LoginScreen";
import SignupScreen from "@screens/start/SignupScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabsNavigation(params) {
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
      {bottomTabs(params.userType).map((item) => (
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

export default function MainNavigation(params) {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name="Hello" component={HelloScreen} /> */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen
        name="Main"
        component={TabsNavigation}
        initialParams={{ userType: "User" }}
      />
    </Stack.Navigator>
  );
}
