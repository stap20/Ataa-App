import LayoutManager from "./LayoutManager";
import { profileHandler } from "@services";
import { User } from "@utils";
import { useState } from "react";

export default function ProfileScreen() {
  const [userData, setUserData] = useState(User.getData());
  
  const onSave = async (data) => {
    profileHandler.editProfile(data).then((result) => {
      if (result) {
        const data = JSON.parse(JSON.stringify(User.getData()));
        setUserData(data);
      }
    });
  };

  return <LayoutManager data={userData} onSave={onSave} />;
}
