import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import profileStyles from "@styles/screens/profileStyles";
import { FormText, Icon } from "@components";

export default function LayoutManager({ data, profileImg = null }) {
  const [isRead, setIsRead] = useState(true);
  const styles = profileStyles();

  const profileImageSrc =
    profileImg == null
      ? require("@assets/profile-img.png")
      : { uri: profileImg };

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
        text={"احمد صالح"}
        isRead={isRead}
      />
      <FormText
        style={styles.formTextContainer}
        placeHolder={"البريد الإلكتروني"}
        text={"Saleh@email.com"}
        isRead={isRead}
      />
      <FormText
        style={styles.formTextContainer}
        placeHolder={"رقم الهاتف"}
        text={"+974 234 567 8911"}
        isRead={isRead}
      />
      <FormText
        style={styles.formTextContainer}
        placeHolder={"كلمة المرور"}
        text={"aaaaaa"}
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
