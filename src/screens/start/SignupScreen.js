import { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { Theme } from "@theme/index.js";
import { signupStyle } from "@styles/screens/start";
import { FormText } from "@components";

import { userHandler } from "@services";

export default SignupScreen = () => {
  const [agreed, setAgreed] = useState(false);

  const styles = signupStyle(agreed);

  const phonenumberInput = useRef(PhoneInput);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const navigation = useNavigation();

  const isBtnEnable = () => {
    return (
      phoneNumber &&
      password &&
      confirmationPassword &&
      email &&
      fullname &&
      agreed &&
      password === confirmationPassword
    );
  };
  const onLogin = () => {
    navigation.popToTop();
  };
  const onSignup = () => {
    if (isBtnEnable()) {
      const data = {
        name: fullname,
        phoneNumber: phoneNumber,
        countryCode: phonenumberInput.current.getCallingCode(),
        email: email,
        password: password,
      };

      userHandler.signup(data).then((res) => {
        if (res) {
          onLogin();
        }
      });
    }
  };

  const onCheckBox = () => {
    setAgreed(!agreed);
  };
  const onEye = (id) => {};

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.signupTextContainer}>
          <Text style={styles.signupText}>{"حساب جديد"}</Text>
        </View>

        <View style={styles.inputs}>
          <FormText
            style={styles.formTextContainer}
            textStyle={styles.inputsText}
            placeHolder={"الاسم بالكامل"}
            text={fullname}
            onChange={setFullname}
            isRead={false}
          />
          <View style={[styles.inputContainer, styles.formTextContainer]}>
            <PhoneInput
              maxLength={8}
              ref={phonenumberInput}
              defaultCode={"QA"}
              containerStyle={styles.countryFlagsContainer}
              placeholder={"رقم الهاتف"}
              textInputStyle={styles.inputsText}
              textContainerStyle={styles.inputTextContainer}
              onChangeText={setPhoneNumber}
              value={phoneNumber}
            />
          </View>
          <FormText
            style={styles.formTextContainer}
            textStyle={styles.inputsText}
            placeHolder={"البريد الالكتروني"}
            text={email}
            onChange={setEmail}
            isRead={false}
          />

          <FormText
            style={styles.formTextContainer}
            textStyle={styles.inputsText}
            placeHolder={"كلمة المرور"}
            text={password}
            onChange={setPassword}
            isRead={false}
            isPassword={true}
          />

          <FormText
            style={styles.formTextContainer}
            textStyle={styles.inputsText}
            placeHolder={"تأكيد كلمة المرور"}
            text={confirmationPassword}
            onChange={setConfirmationPassword}
            isRead={false}
            isPassword={true}
          />
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
            disabled={!isBtnEnable()}
            style={[
              styles.signupBtnContainer,
              { opacity: !isBtnEnable() ? 0.5 : 1 },
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
    </ScrollView>
  );
};
