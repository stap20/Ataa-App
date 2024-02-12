import LayoutManager from "./LayoutManager";
import { pendingHandler } from "@services";
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

  };

  return <LayoutManager data={userData} onSave={onSave} />;
}
