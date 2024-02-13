import LayoutManager from "./LayoutManager";
import { profileHandler } from "@services";
import { User } from "@utils";

export default function ProfileScreen() {
  const userData = {
    name: User.name,
    email: User.email,
    phoneNumber: User.phoneNumber,
    password: User.password,
    profileImage: User.profileImage,
  };

  const onSave = (data) => {
    profileHandler.editProfile(data);
  };

  return <LayoutManager data={userData} onSave={onSave} />;
}
