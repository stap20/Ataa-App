import { useNavigation } from "@react-navigation/native";
import LayoutManager from "./LayoutManager";
import { profileHandler } from "@services";
import { LoadingContextHandler } from "@utils";
export default function CreateProfileScreen() {
  const navigation = useNavigation();
  const { showLoading, setShowLoading } =
    LoadingContextHandler.useLoadingContext();

  const onSave = (data) => {
    setShowLoading(true);
    profileHandler.createProfile(data);
    setShowLoading(false);
    navigation.navigate("moderators");
  };

  return (
    <LayoutManager onSave={onSave} isCreate={true} btnText={"إنشاء ملف مشرف"} />
  );
}
