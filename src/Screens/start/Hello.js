import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import IconManager from "@components/Icons/IconManager";
import { Theme } from "@theme/index.js";
import { useState } from "react";
import helloStyle from "@styles/start/onboard/helloStyle";

const texts = {
  first: {
    title: "مرحبا بك في تطبيق عطاء",
    description: "هذا التطبيق للتبرع بالملابس والألعاب والأدوات المكتبية",
  },
  sec: {
    title: "تعليمات الاستخدام",
    description: `هذا التطبيق (تجريبي) خاص بالطلاب تحت إشراف ولي الأمر ويتم التبرع لصالح مؤسسة قطر الخيرية.
    يتم رفع صورة ما يراد التبرع به وكتابة ملاحظات عن حالته أو وصف لحجمه وأبعاده ثم الإضافة إلى السلة.
    يتم التسليم للطالبات المسؤولات عن إدارة التطبيق.`,
  },
};

export default HelloScreen = (props) => {
  const styles = helloStyle();
  const [lvl, setLvl] = useState(1);
  const onNext = () => {
    if (lvl == 2) {
      props.onClose();
    } else {
      setLvl(lvl + 1);
    }
  };
  return (
    <View style={styles.container}>
      {lvl == 1 ? (
        <IconManager name={"onBoardHello"} width={184} height={295} />
      ) : (
        <IconManager name={"onBoardPana"} width={314.55} height={201} />
      )}
      <View style={styles.welcomeContaienr}>
        <Text style={styles.welcomeText}>
          {" "}
          {lvl == 1 ? texts.first.title : texts.sec.title}{" "}
        </Text>
        <Text
          style={[
            styles.descriptionText,
            { textAlign: lvl == 1 ? "center" : "right" },
          ]}
        >
          {lvl == 1 ? texts.first.description : texts.sec.description}
        </Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.progressContainer}>
          <TouchableOpacity
            onPress={() => {
              setLvl(2);
            }}
            style={[
              styles.progressDot,
              {
                height: lvl == 2 ? 12 : 6,
                backgroundColor:
                  lvl == 2 ? Theme.colors.third : Theme.colors.fourth,
              },
            ]}
          ></TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setLvl(1);
            }}
            style={[
              styles.progressDot,
              {
                height: lvl == 1 ? 12 : 6,
                backgroundColor:
                  lvl == 1 ? Theme.colors.third : Theme.colors.fourth,
              },
            ]}
          ></TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => onNext()}
          style={styles.nextBtnContainer}
        >
          <Text style={styles.nextBtnText}>
            {lvl == 2 ? "النهاية" : "التالي"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};