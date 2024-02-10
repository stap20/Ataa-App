import { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import IconManager from "@components/Icons/IconManager";
import loginStyle from "@styles/start/loginStyle";
import OnBoardScreen from "./OnBoardScreen";

const isEdit = false;
const isRTL = false;
export default LoginScreen = (params) => {
  const [intro, setIntro] = useState(true);
  const [unlockBtn, setUnlockBtn] = useState(false);
  const styles = loginStyle();
  const phonenumberInput = useRef(PhoneInput);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (phoneNumber && password) {
      setUnlockBtn(true);
    } else {
      setUnlockBtn(false);
    }
  });

  const onSignup = () => {
    params?.navigation.navigate("Signup");
  };
  const onLogin = () => {
    console.log(`login: ${phoneNumber}, ${password}`);
  };
  const onForgetPassword = () => {
    console.log("Forget Password Pressed");
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.imageFrameContainer}>
            <IconManager name="rafiki" width={"100%"} height={"100%"} />
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.loginTextContainer}>
            <Text style={styles.loginText}>{"تسجيل الدخول"}</Text>
          </View>

          <View style={styles.inputs}>
            <View style={styles.inputContainer}>
              <PhoneInput
                maxLength={8}
                ref={phonenumberInput}
                defaultCode={"QA"}
                containerStyle={{
                  flexDirection: "row-reverse",
                }}
                placeholder={"رقم الهاتف"}
                textInputStyle={styles.inputsText}
                onChangeFormattedText={setPhoneNumber}
                value={phoneNumber}
              />
            </View>
            <View style={[styles.inputContainer, { flexDirection: "row" }]}>
              <TouchableOpacity
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <IconManager name="eye" width={24} height={24} />
              </TouchableOpacity>
              <TextInput
                placeholder={"كلمة المرور"}
                secureTextEntry
                style={[styles.inputsText, { textAlign: "right" }]}
                onChangeText={setPassword}
                value={password}
              />
            </View>
          </View>

          <View style={styles.actions}>
            <TouchableOpacity
              onPress={() => onForgetPassword()}
              style={styles.forgotContainer}
            >
              <Text style={styles.forgotText}>{"نسيت كلمة المرور؟"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onLogin()}
              style={[
                styles.loginBtnContainer,
                { opacity: !unlockBtn ? 0.5 : 1 },
              ]}
            >
              <Text style={styles.loginBtnText}>{"تسجيل دخول"}</Text>
            </TouchableOpacity>
            <View style={styles.signupContainer}>
              <TouchableOpacity onPress={() => onSignup()}>
                <Text style={styles.createText}>{"قم بإنشاء حساب"}</Text>
              </TouchableOpacity>
              <Text> </Text>
              <Text style={styles.dontText}>{"لا تمتلك حساب؟"}</Text>
            </View>
          </View>
        </View>
      </View>
      <OnBoardScreen status={intro} onClose={() => setIntro(false)} />
    </>
  );
};
