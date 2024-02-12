import ModeratorScreen from "@screens/moderator";
import PendingScreen from "@screens/pending";
import ProfileScreen from "@screens/profile";

export default [
  {
    name: "moderators",
    label: "المشرفين",
    icon: "moderator",
    activeIcon: "moderator-active",
    screen: ModeratorScreen,
  },
  {
    name: "categories",
    label: "التصنيفات",
    icon: "categories",
    activeIcon: "categories-active",
    screen: PendingScreen,
  },
  {
    name: "editMessage",
    label: "تعديل الرسالة",
    icon: "edit",
    activeIcon: "edit-active",
    screen: PendingScreen,
  },
  {
    name: "profile",
    label: "الملف الشخصي",
    icon: "profile",
    activeIcon: "profile-active",
    screen: ProfileScreen,
  },
].reverse();
