import { Text, View } from "react-native";
import { donateCardStyles } from "@styles/components/donateCard";
import Donator from "./Donator";
import Donation from "./Donation";
import StatusChip from "./StatusChip";
import Actions from "./Actions";
import Icon from "@components/Icon";
import { formatArabicDate } from "@utils";

export default function DonateCard({ data = {}, style = {} }) {
  const styles = donateCardStyles();

  const {
    donatorName = "أحمد صالح",
    donationNumber = "#123456",
    quantity = 10,
    status = "accepted",
    date = new Date(),
    profileImg = null,
    onCancel = null,
    onAccept = null,
    onDecline = null,
  } = data;

  const isAction = onCancel !== null || onAccept !== null || onDecline !== null;

  return (
    <View style={[styles.container, style]}>
      <View style={styles.rowContainer}>
        <Donator
          donatorName={donatorName}
          donationNumber={donationNumber}
          profileImg={profileImg}
        />
        <Donation quantity={quantity} type={"cloth"} />
      </View>
      <View
        style={[styles.statusRowContainer, { marginBottom: isAction ? 16 : 0 }]}
      >
        <View style={styles.dateContainer}>
          <View style={styles.dateIconContainer}>
            <Icon iconName={"calendar"} />
          </View>

          <Text style={styles.dateText}>{formatArabicDate(date)}</Text>
        </View>
        <View style={styles.statusContainer}>
          <StatusChip status={status} />
        </View>
      </View>

      {isAction && (
        <View style={{ flex: 1 }}>
          <Actions
            isAdmin={
              onCancel === null && (onAccept !== null || onDecline !== null)
            }
          />
        </View>
      )}
    </View>
  );
}
