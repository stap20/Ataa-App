import HistoryScreen from "@screens/history";
import PendingScreen from "@screens/pending";
import ProfileScreen from "@screens/profile";
import DonateScreen from "@screens/donate";

export default [
  {
    name: "waiting",
    label: "قيد الانتظار",
    icon: "pending",
    activeIcon: "pending-active",
    screen: PendingScreen,
  },
  {
    name: "history",
    label: "السجل",
    icon: "history",
    activeIcon: "history-active",
    screen: HistoryScreen,
  },
  {
    name: "donate",
    label: "تبرع",
    icon: "donate",
    activeIcon: "donate-active",
    screen: DonateScreen,
  },
  {
    name: "profile",
    label: "الملف الشخصي",
    icon: "profile",
    activeIcon: "profile-active",
    screen: ProfileScreen,
  },
].reverse();
