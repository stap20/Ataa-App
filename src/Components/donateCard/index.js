import { Text, Touchable, TouchableOpacity, View } from "react-native";
import { donateCardStyles } from "@styles/components/donateCard";
import Donator from "./Donator";
import Donation from "./Donation";
import StatusChip from "./StatusChip";
import Actions from "./Actions";
import Icon from "@components/Icon";
import { formatArabicDate } from "@utils";

export default function DonateCard({
  data = {},
  style = {},
  onCancel = null,
  onAccept = null,
  onDecline = null,
  onCard = () => {},
}) {
  const styles = donateCardStyles();
  const {
    id = "2342342342342",
    donatorName = "أحمد صالح",
    donationNumber = "#123456",
    quantity = 10,
    status = "accepted",
    date = new Date(),
    profileImage = null,
  } = data;

  const isAction = onCancel !== null || onAccept !== null || onDecline !== null;

  return (
    <TouchableOpacity onPress={onCard} style={[styles.container, style]}>
      <View style={styles.rowContainer}>
        <Donator
          donatorName={donatorName}
          donationNumber={donationNumber}
          profileImage={profileImage}
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
            onCancel={onCancel}
            onAccept={onAccept}
            onDecline={onDecline}
            id={id}
          />
        </View>
      )}
    </TouchableOpacity>
  );
}
