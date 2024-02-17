import { useEffect, useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { useNavigation } from "@react-navigation/native";
import { loginStyle } from "@styles/screens/start";
import OnBoardScreen from "./OnBoardScreen";
import { Icon, FormText } from "@components";
import { Storage } from "@utils";
import { userHandler } from "@services";
import { LoadingContextHandler } from "@utils";

export default LoginScreen = () => {
  const { showLoading, setShowLoading } =
    LoadingContextHandler.useLoadingContext();

  const [intro, setIntro] = useState(true);
  const [unlockBtn, setUnlockBtn] = useState(false);
  const styles = loginStyle();
  const phonenumberInput = useRef(PhoneInput);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [resetInputs, setResetInputs] = useState(0);
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    if (phoneNumber && password) {
      setUnlockBtn(true);
    } else {
      setUnlockBtn(false);
    }
  });

  useEffect(() => {
    setResetInputs(0);
  }, []);

  const onSignup = () => {
    navigation.navigate("signup");
  };

  const onLogin = () => {
    setShowLoading(true);
    setResetInputs(1);
    setPassword("");
    setPhoneNumber("");
    const data = {
      phoneNumber: phoneNumber,
      countryCode: phonenumberInput.current.getCallingCode(),
      password: password,
    };
    userHandler.login(data).then((result) => {
      setShowLoading(false);
      if (result) {
        navigation.navigate("main");
      }
    });
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
            <View style={[styles.inputContainer, styles.formTextContaine]}>
              <PhoneInput
                key={resetInputs}
                maxLength={8}
                ref={phonenumberInput}
                defaultCode={"QA"}
                containerStyle={styles.countryFlagsContainer}
                placeholder={"رقم الهاتف"}
                textInputStyle={styles.inputsText}
                textContainerStyle={styles.inputTextContainer}
                onChangeText={setPhoneNumber}
                defaultValue={phoneNumber}
                value={phoneNumber}
              />
            </View>

            <FormText
              style={styles.formTextContainer}
              textStyle={styles.inputsText}
              placeHolder={"كلمة المرور"}
              text={password}
              onChange={setPassword}
              isRead={false}
              isPassword={true}
            />
          </View>

          <View style={styles.actions}>
            {/* <TouchableOpacity
              onPress={() => onForgetPassword()}
              style={styles.forgotContainer}
            >
              <Text style={styles.forgotText}>{"نسيت كلمة المرور؟"}</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              onPress={onLogin}
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
