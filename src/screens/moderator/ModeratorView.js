import { useState } from "react";
import { RefreshControl, View } from "react-native";
import { moderatorStyles } from "@styles/screens/moderator";
import { FlashList } from "@shopify/flash-list";
import { ModeratorCard } from "@components";
import { Theme } from "@theme";
import ProfileEditModal from "../../components/ProfileEditModal";

export default function ModeratorView({
  data,
  refreshFunction,
  onDelete,
  onEdit,
}) {
  const [refreshing, setRefreshing] = useState(false);
  const styles = moderatorStyles();

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
          <ModeratorCard
            style={styles.cardContainer}
            data={item}
            onDelete={onDelete}
            onEdit={onEdit}
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
