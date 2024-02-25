import { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import profileStyles from "@styles/components/profileStyles";
import FormText from "@components/FormText";
import Icon from "@components/Icon";
import ProfileImage from "@components/ProfileImage";
import { ImagePickerHandler } from "@utils";

export default function Profile({
  data,
  isCreate = false,
  isEditEnabled = true,
  onSave,
  btnText = "حفظ التغيرات",
}) {
  const styles = profileStyles();
  const [isRead, setIsRead] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("+974 ");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    if (!isCreate) {
      const {
        name = "احمد",
        email = "Ahmed@mail.com",
        phoneNumber = "123456879",
        password = "tioplk",
        profileImage = null,
      } = data;

      setName(name);
      setEmail(email);
      setPhoneNumber(phoneNumber);
      setPassword(password);
      setProfileImage(profileImage);
    } else {
      setIsRead(false);
      isEditEnabled = false;
    }
  }, [data]);

  const onSetProfileImage = async () => {
    const img = await ImagePickerHandler.pickImages(false);
    // console.log(img[0].image);
    setProfileImage(img[0].image);
  };
  const handleSave = () => {
    if (!isCreate && isEditEnabled) {
      setIsRead(true);
    }

    const data = {
      name: name,
      email: email,
      phoneNumber: phoneNumber.replace("+974 ", ""),
      password: password,
      profileImage: profileImage,
    };

    if (isCreate) {
      setName("");
      setEmail("");
      setPhoneNumber("+974 ");
      setPassword("");
      setProfileImage(null);
    }
    onSave(data);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.profileImageContainer}>
          <ProfileImage profileImage={profileImage} width={120} height={120} />
          {!isRead && (
            <TouchableOpacity
              onPress={onSetProfileImage}
              style={styles.cameraIcon}
            >
              <Icon iconName={"camera"} />
            </TouchableOpacity>
          )}
        </View>
        <FormText
          style={styles.formTextContainer}
          placeHolder={"الاسم بالكامل"}
          text={name}
          onChange={setName}
          isRead={isRead}
        />
        <FormText
          style={styles.formTextContainer}
          placeHolder={"البريد الإلكتروني"}
          text={email}
          onChange={setEmail}
          isRead={isRead}
        />
        <FormText
          style={styles.formTextContainer}
          placeHolder={"رقم الهاتف"}
          text={phoneNumber}
          onChange={setPhoneNumber}
          isRead={isRead}
        />
        <FormText
          style={styles.formTextContainer}
          placeHolder={"كلمة المرور"}
          text={password}
          onChange={setPassword}
          isPassword={true}
          isRead={isRead}
        />
      </ScrollView>
      {isEditEnabled &&
        (isRead ? (
          <TouchableOpacity
            style={styles.formBtn}
            onPress={() => {
              setIsRead(false);
            }}
          >
            <Text style={styles.btnText}>{"تعديل البيانات"}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.formBtn} onPress={handleSave}>
            <Text style={styles.btnText}>{btnText}</Text>
          </TouchableOpacity>
        ))}
    </View>
  );
}
