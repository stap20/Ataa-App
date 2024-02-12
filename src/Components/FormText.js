import { Text, TextInput, TouchableOpacity, View } from "react-native";
import formTextStyles from "@styles/components/formTextStyles";
import { useRef, useState } from "react";
import Icon from "@components/Icon";

export default function FormText({
  placeHolder,
  text = "",
  isRead = true,
  isPassword = false,
  isRTL = true,
  style = {},
  onChange = () => {},
}) {
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const styles = formTextStyles();

  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Toggle visibility state
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.textContainer}>
        <Text style={styles.placeHolder}>{placeHolder}</Text>

        {!isRead ? (
          <TextInput
            style={isPassword ? styles.secureText : styles.text}
            value={text}
            onChangeText={onChange}
            secureTextEntry={!isVisible && isPassword}
            textAlign={isRTL ? "right" : "left"}
          />
        ) : (
          <Text style={[styles.text, { textAlign: isRTL ? "right" : "left" }]}>
            {isPassword ? "*".repeat(text.length) : text}
          </Text>
        )}
      </View>
      {isPassword && !isRead && (
        <TouchableOpacity onPress={toggleVisibility}>
          <Icon iconName={"visible"} />
        </TouchableOpacity>
      )}
    </View>
  );
}
