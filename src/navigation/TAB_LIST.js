import { Text, View } from "react-native";
import WaitingListScreen from "./../Screens/user/WaitingListScreen";
import HistoryScreen from "./../Screens/user/HistoryScreen";
import DonateScreen from "./../Screens/user/DonateScreen";
import MyProfileScreen from "./../Screens/user/MyProfileScreen";

function Default({ route }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{route.params.labelText}</Text>
    </View>
  );
}

const userTabs = [
  {
    name: "Waiting",
    label: "قيد الانتظار",
    icon: "time_atack",
    screen: WaitingListScreen,
  },
  {
    name: "History",
    label: "السجل",
    icon: "history",
    screen: HistoryScreen,
  },
  {
    name: "Donate",
    label: "تبرع",
    icon: "box",
    screen: DonateScreen,
  },
  {
    name: "Profile",
    label: "الملف الشخصي",
    icon: "profile",
    screen: MyProfileScreen,
  },
].reverse();

const adminTabs = [
  {
    name: "Waiting",
    label: "قيد الانتظار",
    icon: "time_atack",
    screen: WaitingListScreen,
  },
  {
    name: "History",
    label: "السجل",
    icon: "history",
    screen: HistoryScreen,
  },
  {
    name: "Donate",
    label: "تبرع",
    icon: "box",
    screen: DonateScreen,
  },
  {
    name: "Profile",
    label: "الملف الشخصي",
    icon: "profile",
    screen: MyProfileScreen,
  },
];

const visorTabs = [
  {
    name: "Waiting",
    label: "قيد الانتظار",
    icon: "time_atack",
    screen: WaitingListScreen,
  },
  {
    name: "History",
    label: "السجل",
    icon: "history",
    screen: HistoryScreen,
  },
  {
    name: "Storage",
    label: "مخزن",
    icon: "shop",
    screen: DonateScreen,
  },
  {
    name: "Profile",
    label: "الملف الشخصي",
    icon: "profile",
    screen: MyProfileScreen,
  },
];

const bottomTabs = (type) => {
  switch (type) {
    case "User":
      return userTabs;
      break;
    case "Admin":
      return adminTabs;
      break;
    case "Supervisor":
      return visorTabs;
      break;
  }
  return userTabs;
};

export default bottomTabs;
