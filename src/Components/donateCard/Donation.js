import { Text, View } from "react-native";
import { donationStyles } from "@styles/components/donateCard";
import { User } from "@utils";
import Icon from "@components/Icon";

export default function Donation({ type, quantity }) {
  const styles = donationStyles();

  return (
    <View style={styles.container}>
      <View style={styles.donationIconContainer}>
        <Icon iconName={User.donationTypes[type].icon} />
      </View>
      <View style={styles.donationDetailsContainer}>
        <Text style={styles.donationTypeText}>
          {User.donationTypes[type].title}
        </Text>
        <View style={styles.quantityContainer}>
          <Text style={styles.quantityTitle}>{"الكمية: "}</Text>
          <Text style={styles.quantityText}>{quantity}</Text>
        </View>
      </View>
    </View>
  );
}
