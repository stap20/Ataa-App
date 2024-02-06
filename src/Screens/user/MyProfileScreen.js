import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import convertPxToDp from "./../../Components/ConvertPxToDp";
import IconManager from "../../Components/Icons/IconManager";
import { useState } from "react";
import MyUser from "./../../OurUser";
import ShowProfileImage from "../../Components/ShowProfileImage";
const path = "#CB8949";
const bg = "#EAD0B6";
export default function MyProfileScreen({}) {
  const [fullname, setFullname] = useState(
    MyUser.user.firstName + " " + MyUser.user.lastName
  );
  const [email, setEmail] = useState(MyUser.user.email);
  const [phoneNumber, setPhonenumber] = useState(MyUser.user.phoneNumber);
  const [password, setPassword] = useState(MyUser.user.password);
  const [profileImage, setProfileImage] = useState(MyUser.user.profileImage);

  const saveChanges = () => {
    const fullName = fullname.split(" ");
    MyUser.setMyUser({
      ...MyUser.user,
      firstName: fullName[0],
      lastName: [1],
      email,
      phoneNumber,
      password,
      profileImage,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{"الملف الشخصي"}</Text>
        </View>
        <ShowProfileImage icon={"camera"} />
      </View>
      <View style={styles.body}>
        <View style={styles.inputContainer}>
          <View style={styles.inputTextContainer}>
            <Text style={styles.inputTitleText}>{"الاسم الكامل"}</Text>
          </View>
          <View style={styles.TextInputContainer}>
            <TextInput
              onChangeText={setFullname}
              value={fullname}
              inputMode="text"
              style={styles.inputs}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputTextContainer}>
            <Text style={styles.inputTitleText}>{"البريد الالكتروني"}</Text>
          </View>
          <View style={styles.TextInputContainer}>
            <TextInput
              onChangeText={setEmail}
              value={email}
              inputMode="email"
              style={styles.inputs}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputTextContainer}>
            <Text style={styles.inputTitleText}>{"رقم الهاتف"}</Text>
          </View>
          <View style={styles.TextInputContainer}>
            <TextInput
              onChangeText={setPhonenumber}
              value={phoneNumber}
              inputMode="tel"
              style={styles.inputs}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputTextContainer}>
            <Text style={styles.inputTitleText}>{"كلمة المرور"}</Text>
          </View>
          <View style={styles.TextInputContainer}>
            <TextInput
              onChangeText={setPassword}
              value={password}
              secureTextEntry={true}
              inputMode="text"
              style={styles.inputs}
            />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => saveChanges()}
          style={styles.saveBtnContainer}
        >
          <Text style={styles.saveBtnText}>{"حفظ التغييرات"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    flex: 3,
    // backgroundColor: "red",
  },
  titleContainer: {
    flex: 1,
    // backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    // fontFamily: "Changa-Regular",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 28,
  },

  body: {
    flex: 5,
    gap: 16,
    // backgroundColor: "lightblue",
    justifyContent: "center",
  },
  inputContainer: {
    flex: 1,
    maxHeight: 56,
    backgroundColor: "#F9FAFA",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E6E9EA",
    paddingHorizontal: 20,
  },
  inputTextContainer: {
    flex: 1,
    // backgroundColor: "red",
    justifyContent: "flex-end",
  },
  inputTitleText: {
    fontWeight: "500",
    fontSize: 11,
    lineHeight: 12,
    color: "#A4ACAD",
  },
  TextInputContainer: {
    flex: 2,
    // backgroundColor: "yellow",
  },
  inputs: {
    flex: 1,
    textAlign: "right",
    textAlignVertical: "top",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 22.4,
    color: "#141F1F",
  },

  footer: {
    flex: 2,
    // backgroundColor: "yellow",
  },
  saveBtnContainer: {
    width: "100%",
    height: 56,
    backgroundColor: "#CB8949",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    // paddingHorizontal: 190,
    // paddingVertical: 16,
  },
  saveBtnText: {
    fontWeight: "700",
    fontSize: 15,
    lineHeight: 22.5,
    color: "#FFFFFF",
  },
});
