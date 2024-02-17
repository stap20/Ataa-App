import { Text, TouchableOpacity, View } from "react-native";
import { User } from "@utils";
import { Theme } from "@theme";
import Icon from "@components/Icon";
import donateCategoryStyles from "@styles/components/donateCategoryStyles";

export default DonateCategory = ({
  type,
  index,
  onSelect,
  selected = false,
}) => {
  const data = User.donationTypes[type];
  const styles = donateCategoryStyles(selected);

  return (
    <TouchableOpacity
      onPress={() => onSelect({ index: index, data: data._id })}
      style={styles.categoryContainer}
    >
      <View style={styles.categoryIconContainer}>
        <Icon
          iconName={data.icon}
          iconStrokeColor={
            !selected ? Theme.iconColors.inActiveDonateCategory : null
          }
        />
      </View>
      <Text style={styles.categoryText}>{data.title}</Text>
    </TouchableOpacity>
  );
};
