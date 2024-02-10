import { Text, View } from "react-native";
import { donationStyles } from "@styles/components/donateCard";
import { donateTypes } from "@utils";
import Icon from "@components/Icon";

export default function Donation({ type, quantity }) {
  const styles = donationStyles();

  return (
    <View style={styles.container}>
      <View style={styles.donationIconContainer}>
        <Icon iconName={donateTypes[type].icon} />
      </View>
      <View style={styles.donationDetailsContainer}>
        <Text style={styles.donationTypeText}>{donateTypes[type].title}</Text>
        <View style={styles.quantityContainer}>
          <Text style={styles.quantityTitle}>{"الكمية: "}</Text>
          <Text style={styles.quantityText}>{quantity}</Text>
        </View>
      </View>
    </View>
  );
}
