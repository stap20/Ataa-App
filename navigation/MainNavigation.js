import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";

const Tab = createBottomTabNavigator();

function OnWaiting() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>قيد الانتظار</Text>
    </View>
  );
}

function History() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>السجل</Text>
    </View>
  );
}

function Donate() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>التبرع</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>الملف الشخصي</Text>
    </View>
  );
}

export default function MainNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIconStyle: {
          width: 40,
          backgroundColor: "orange",
        },
        tabBarActiveTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Waiting"
        component={OnWaiting}
        options={{ tabBarLabel: "قيد الانتظار" }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{ tabBarLabel: "السجل" }}
      />
      <Tab.Screen
        name="Donate"
        component={Donate}
        options={{ tabBarLabel: "التبرع" }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ tabBarLabel: "الملف الشخصي" }}
      />
    </Tab.Navigator>
  );
}
