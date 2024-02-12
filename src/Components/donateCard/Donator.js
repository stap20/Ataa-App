import { Text, View } from "react-native";
import { donatorStyles } from "@styles/components/donateCard";
import ProfileImage from "@components/ProfileImage";

export default function Donator({ donatorName, profileImg, donationNumber }) {
  const styles = donatorStyles();

  return (
    <View style={styles.container}>
      <View style={styles.donatorImage}>
        <ProfileImage profileImg={profileImg} width={50} height={50} />
      </View>

      <View style={styles.donatorDetailsContainer}>
        <Text style={styles.donatorName}>{donatorName}</Text>
        <Text style={styles.donationNumber}>{donationNumber}</Text>
      </View>
    </View>
  );
}
