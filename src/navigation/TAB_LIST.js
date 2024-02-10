import { Text, View } from "react-native";
import WaitingListScreen from "@screens/user/WaitingListScreen";
import HistoryScreen from "@screens/user/HistoryScreen";
import DonateScreen from "@screens/user/DonateScreen";
import MyProfileScreen from "@screens/user/MyProfileScreen";

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
