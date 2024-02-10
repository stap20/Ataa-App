import HistoryScreen from "@screens/history";

export default [
  {
    name: "Waiting",
    label: "قيد الانتظار",
    icon: "pending",
    activeIcon: "pending-active",
    screen: HistoryScreen,
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
    screen: HistoryScreen,
  },
  {
    name: "Profile",
    label: "الملف الشخصي",
    icon: "profile",
    activeIcon: "profile-active",
    screen: HistoryScreen,
  },
].reverse();
