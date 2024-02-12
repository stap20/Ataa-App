import { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { profileStyles } from "@styles/screens/profile";
import { FormText, Icon } from "@components";
import { User } from "@utils";

export default function ProfileView({ data }) {
  const styles = profileStyles();
  const [isRead, setIsRead] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setName(data.name);
    setEmail(data.email);
    setPhoneNumber(data.phoneNumber);
    setPassword(data.password);
  });

  const profileImageSrc =
    data && data.profileImage
      ? { uri: data.profileImage }
      : require("@assets/profile-img.png");

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
