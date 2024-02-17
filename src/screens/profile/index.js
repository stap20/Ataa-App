import LayoutManager from "./LayoutManager";
import { profileHandler, userHandler } from "@services";
import { User } from "@utils";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const [userData, setUserData] = useState(User.getData());
  const navigation = useNavigation();

  const onSave = async (data) => {
    profileHandler.editProfile(data).then((result) => {
      if (result) {
        const data = JSON.parse(JSON.stringify(User.getData()));
        setUserData(data);
      }
    });
  };

  const onLogout = () => {
    userHandler.logout().then((result) => {
      if (result) {
        navigation.popToTop();
      }
    });
  };

  return <LayoutManager onLogout={onLogout} data={userData} onSave={onSave} />;
}
