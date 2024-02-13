import ModeratorScreen from "@screens/moderator";
import EditMessageScreen from "@screens/editMessage";
import ProfileScreen from "@screens/profile";
import CreateProfileScreen from "@screens/createProfile";

export default [
  {
    name: "moderators",
    label: "المشرفين",
    icon: "moderator",
    activeIcon: "moderator-active",
    screen: ModeratorScreen,
  },
  {
    name: "newModerator",
    label: "مشرف جديد",
    icon: "profile",
    activeIcon: "profile-active",
    screen: CreateProfileScreen,
  },
  {
    name: "edit",
    label: "تعديل الرسالة",
    icon: "edit",
    activeIcon: "edit-active",
    screen: EditMessageScreen,
  },

  {
    name: "profile",
    label: "الملف الشخصي",
    icon: "profile",
    activeIcon: "profile-active",
    screen: ProfileScreen,
  },
].reverse();
