import { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { profileStyles } from "@styles/screens/profile";
import FormText from "@components/FormText";
import { FormText, Icon } from "@components/FormText";

export default function ProfileView({
  data,
  isCreate = false,
  isEditEnabled = true,
  onSave,
}) {
  const styles = profileStyles();
  const [isRead, setIsRead] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    if (!isCreate) {
      const {
        name = "احمد",
        email = "koko@mail.com",
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
  });

  const profileImageSrc =
    profileImage !== null
      ? { uri: data.profileImage }
      : require("@assets/profile-img.png");

  const handleSave = () => {
    setIsRead(true);

    onSave({
      name,
      email,
      phoneNumber,
      password,
    });
  };
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileImageContainer}>
        <Image source={profileImageSrc} style={styles.profileImage} />
        {!isRead && (
          <TouchableOpacity style={styles.cameraIcon}>
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
        text={"+974 " + phoneNumber}
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

      {isRead ? (
        <TouchableOpacity
          style={styles.formBtn}
          onPress={() => {
            setIsRead(false);
          }}
        >
          <Text style={styles.btnText}>{"تعديل البيانات"}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.formBtn}
          onPress={() => {
            setIsRead(true);
          }}
        >
          <Text style={styles.btnText}>{"حفظ التغيرات"}</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}
