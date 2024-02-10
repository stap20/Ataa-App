import { Text, View } from "react-native";
import historyStyles from "@styles/screens/historyStyles";
import { FlashList } from "@shopify/flash-list";
import { DonateCard } from "@components";

export default function LayoutManager({ data }) {
  const styles = historyStyles();

  return (
    <View style={styles.container}>
      <FlashList
        data={data}
        renderItem={({ item }) => (
          <DonateCard item={item} style={styles.cardContainer} data={item} isAction={true} />
        )}
        estimatedItemSize={142}
      />
    </View>
  );
}
