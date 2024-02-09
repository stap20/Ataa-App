import WaitingListScreen from "@screens/user/WaitingListScreen";
import HistoryScreen from "@screens/user/HistoryScreen";
import DonateScreen from "@screens/user/DonateScreen";
import MyProfileScreen from "@screens/user/MyProfileScreen";

export default [
  {
    name: "Waiting",
    label: "قيد الانتظار",
    icon: "pending",
    activeIcon: "pending-active",
    screen: WaitingListScreen,
  },
  {
    name: "History",
    label: "السجل",
    icon: "history",
    activeIcon: "history-active",
    screen: HistoryScreen,
  },
  {
    name: "Donate",
    label: "تبرع",
    icon: "donate",
    activeIcon: "donate-active",
    screen: DonateScreen,
  },
  {
    name: "Profile",
    label: "الملف الشخصي",
    icon: "profile",
    activeIcon: "profile-active",
    screen: MyProfileScreen,
  },
].reverse();
