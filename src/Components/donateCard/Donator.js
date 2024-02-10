import { Image, Text, View } from "react-native";
import { donatorStyles } from "@styles/components/donateCard";

export default function Donator({ donatorName, profileImg, donationNumber }) {
  const styles = donatorStyles();

  const profileImageSrc =
    profileImg == null
      ? require("@assets/profile-img.png")
      : { uri: profileImg };

  return (
    <View style={styles.container}>
      <Image source={profileImageSrc} style={styles.donatorImage} />
      <View style={styles.donatorDetailsContainer}>
        <Text style={styles.donatorName}>{donatorName}</Text>
        <Text style={styles.donationNumber}>{donationNumber}</Text>
      </View>
    </View>
  );
}
