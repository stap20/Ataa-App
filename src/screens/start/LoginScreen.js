import { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { useNavigation } from "@react-navigation/native";
import { loginStyle } from "@styles/screens/start";
import OnBoardScreen from "./OnBoardScreen";
import { Icon } from "@components";
import { Theme } from "@theme";
import { Storage } from "@utils";

export default LoginScreen = () => {
  const [intro, setIntro] = useState(true);
  const [unlockBtn, setUnlockBtn] = useState(false);
  const styles = loginStyle();
  const phonenumberInput = useRef(PhoneInput);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    if (phoneNumber && password) {
      setUnlockBtn(true);
    } else {
      setUnlockBtn(false);
    }
  });

  const onSignup = () => {
    navigation.navigate("signup");
  };

  const onLogin = () => {
    navigation.navigate("main");
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
            <Icon iconName={"login-image"} />
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
                containerStyle={styles.countryFlagsContainer}
                placeholder={"رقم الهاتف"}
                textInputStyle={styles.inputsText}
                textContainerStyle={styles.inputTextContainer}
                onChangeFormattedText={setPhoneNumber}
                value={phoneNumber}
              />
            </View>
            <View style={[styles.inputContainer, { flexDirection: "row" }]}>
              <TouchableOpacity
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
                placeholderTextColor={Theme.colors.formTextPlaceHolder}
              />
            </View>
          </View>

          <View style={styles.actions}>
            {/* <TouchableOpacity
              onPress={() => onForgetPassword()}
              style={styles.forgotContainer}
            >
              <Text style={styles.forgotText}>{"نسيت كلمة المرور؟"}</Text>
            </TouchableOpacity> */}
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
      <OnBoardScreen
        status={intro}
        onClose={() => {
          Storage.storeData("isIntro", false);
          setIntro(Storage.getData("isIntro"));
        }}
      />
    </>
  );
};
