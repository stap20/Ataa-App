import { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { Theme } from "@theme/index.js";
import { signupStyle } from "@styles/screens/start";
import { useEffect } from "react";

import { Icon } from "@components";

export default SignupScreen = (props) => {
  const [agreed, setAgreed] = useState(false);
  const [unlockBtn, setUnlockBtn] = useState(false);

  const styles = signupStyle(agreed);

  const phonenumberInput = useRef(PhoneInput);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");

  useEffect(() => {
    if (
      phoneNumber &&
      password &&
      confirmationPassword &&
      email &&
      fullname &&
      agreed
    ) {
      setUnlockBtn(true);
    } else {
      setUnlockBtn(false);
    }
  });

  const onLogin = () => {
    props.navigation.popToTop();
  };
  const onSignup = () => {
    if (agreed) {
      console.log(
        `Signup: ${phoneNumber}, ${password}, ${confirmationPassword}, ${email}, ${fullname}`
      );
    }
  };
  const onCheckBox = () => {
    setAgreed(!agreed);
  };
  const onEye = (id) => {};

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.signupTextContainer}>
          <Text style={styles.signupText}>{"حساب جديد"}</Text>
        </View>

        <View style={styles.inputs}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder={"الاسم الكامل"}
              style={[styles.inputsText, { textAlign: "auto" }]}
              onChangeText={setFullname}
              value={fullname}
            />
          </View>
          <View style={styles.inputContainer}>
            <PhoneInput
              maxLength={8}
              ref={phonenumberInput}
              defaultCode={"QA"}
              containerStyle={styles.countryFlagsContainer}
              placeholder={"رقم الهاتف"}
              textInputStyle={styles.inputsText}
              textContainerStyle={styles.inputTextContainer}
              onChangeFormattedText={setPhoneNumber}
              value={phoneNumber}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder={"البريد الالكتروني"}
              style={[styles.inputsText]}
              onChangeText={setEmail}
              value={email}
            />
          </View>
          <View style={[styles.inputContainer, { flexDirection: "row" }]}>
            <TouchableOpacity
              onPress={() => onEye(1)}
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Icon iconName={"visible"} />
            </TouchableOpacity>
            <TextInput
              placeholder={"كلمة المرور"}
              secureTextEntry
              style={[styles.inputsText, { textAlign: "right" }]}
              onChangeText={setPassword}
              value={password}
            />
          </View>
          <View style={[styles.inputContainer, { flexDirection: "row" }]}>
            <TouchableOpacity
              onPress={() => onEye(2)}
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Icon iconName={"visible"} />
            </TouchableOpacity>
            <TextInput
              placeholder={"تأكيد كلمة المرور"}
              secureTextEntry
              style={[styles.inputsText, { textAlign: "right" }]}
              onChangeText={setConfirmationPassword}
              value={confirmationPassword}
            />
          </View>
        </View>

        <View style={styles.actions}>
          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              onPress={() => onCheckBox()}
              style={styles.checkbox}
            />
            <View>
              <Text style={styles.checkboxText}>
                {"من خلال إنشاء حساب ، فإنك توافق على"}
              </Text>
              <View style={{ flexDirection: "row-reverse" }}>
                <TouchableOpacity>
                  <Text
                    style={[
                      styles.checkboxText,
                      { color: Theme.colors.primary },
                    ]}
                  >
                    {"الشروط والأحكام "}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.checkboxText}>{"الخاصة بنا"}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => onSignup()}
            disabled={!unlockBtn}
            style={[
              styles.signupBtnContainer,
              { opacity: !unlockBtn ? 0.5 : 1 },
            ]}
          >
            <Text style={styles.signupBtnText}>{"إنشاء حساب جديد"}</Text>
          </TouchableOpacity>
          <View style={styles.loginContainer}>
            <TouchableOpacity onPress={() => onLogin()}>
              <Text style={styles.createText}>{"تسجيل الدخول"}</Text>
            </TouchableOpacity>
            <Text> </Text>
            <Text style={styles.dontText}>{"تمتلك حساب بالفعل؟"}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
