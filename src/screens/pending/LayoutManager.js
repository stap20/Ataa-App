import { useState } from "react";
import { View, RefreshControl } from "react-native";
import pendingStyles from "@styles/screens/pendingStyles";
import { FlashList } from "@shopify/flash-list";
import { DonateCard } from "@components";
import { Theme } from "@theme";

export default function LayoutManager({
  data,
  isAdmin,
  onCancel,
  onAccept,
  onDecline,
  refreshFunction,
}) {
  const [refreshing, setRefreshing] = useState(false);
  const styles = pendingStyles();

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
          <DonateCard
            item={item}
            style={styles.cardContainer}
            data={item}
            onCancel={!isAdmin ? onCancel : null}
            onAccept={isAdmin ? onAccept : null}
            onDecline={isAdmin ? onDecline : null}
          />
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
