import { createStackNavigator } from "@react-navigation/stack";
import BottomNavigation from "./BottomNavigation";
import LoginScreen from "@screens/start/LoginScreen";
import SignupScreen from "@screens/start/SignupScreen";

const Stack = createStackNavigator();

function BottomNav() {
  return <BottomNavigation userType={"user"} />;
}
export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="main">
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="main"
        component={BottomNav}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
