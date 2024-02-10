import { useState } from "react";
import { RefreshControl, View } from "react-native";
import historyStyles from "@styles/screens/historyStyles";
import { FlashList } from "@shopify/flash-list";
import { DonateCard } from "@components";
import { Theme } from "@theme";

export default function LayoutManager({ data, refreshFunction }) {
  const [refreshing, setRefreshing] = useState(false);
  const styles = historyStyles();

  const onRefresh = () => {
    setRefreshing(true);

    // Call the refresh function passed from the parent component
    refreshFunction().then(() => {
      setRefreshing(false);
    });
  };

  return (
    <View style={styles.container}>
      <FlashList
        data={data}
        renderItem={({ item }) => (
          <DonateCard item={item} style={styles.cardContainer} data={item} />
        )}
        estimatedItemSize={142}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[Theme.colors.primary]}
          />
        }
      />
    </View>
  );
}
