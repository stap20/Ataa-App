import { Text, View } from "react-native";
import empytPageHandlerStyle from "@styles/components/empytPageHandlerStyle";

export default EmpytPageHandler = ({}) => {
  const styles = empytPageHandlerStyle();
  return (
    <View style={styles.container}>
      <Text style={styles.noDataText}>{"لا يوجد بيانات حاليا"}</Text>
    </View>
  );
};
