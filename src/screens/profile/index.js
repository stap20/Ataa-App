import { useState } from "react";
import LayoutManager from "./LayoutManager";
import { pendingHandler } from "@services";
const data = {
  name: "أحمد صالح",
  email: "Saleh@email.com",
  phoneNumber: "8911 567 234",
  password: "tototo",
  profileImage: null,
};

export default function ProfileScreen() {
  const [profileData, setProfileData] = useState(data);

  return <LayoutManager data={profileData} />;
}
