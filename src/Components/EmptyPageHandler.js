import { Text, View } from "react-native";
import empytPageHandlerStyle from "@styles/components/empytPageHandlerStyle";

export default EmpytPageHandler = (props) => {
  const styles = empytPageHandlerStyle();
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.noDataText}>{"لا يوجد بيانات حاليا"}</Text>
    </View>
  );
};
