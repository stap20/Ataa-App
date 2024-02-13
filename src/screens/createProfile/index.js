import { useNavigation } from "@react-navigation/native";
import LayoutManager from "./LayoutManager";
import { profileHandler } from "@services";

export default function CreateProfileScreen() {
  const navigation = useNavigation();

  const onSave = (data) => {
    profileHandler.editProfile(data);
    navigation.navigate("moderators");
  };

  return (
    <LayoutManager onSave={onSave} isCreate={true} btnText={"إنشاء ملف مشرف"} />
  );
}
