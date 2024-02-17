import { useState } from "react";
import { RefreshControl, View } from "react-native";
import { moderatorStyles } from "@styles/screens/moderator";
import { FlashList } from "@shopify/flash-list";
import { ModeratorCard } from "@components";
import { Theme } from "@theme";
import ProfileEditModal from "@components/ProfileEditModal";
import EmptyPageHandler from "@components/EmptyPageHandler";

export default function ModeratorView({
  data,
  refreshFunction,
  onDelete,
  onEdit,
}) {
  const [refreshing, setRefreshing] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentEdit, setCurrentEdit] = useState(null);
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
      {!!data ? (
        <EmptyPageHandler />
      ) : (
        <FlashList
          data={data}
          renderItem={({ item }) => (
            <ModeratorCard
              style={styles.cardContainer}
              data={item}
              onDelete={(id) => onDelete(id)}
              onEdit={(id, data) => {
                setIsEdit(true);
                setCurrentEdit(data);
              }}
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
      )}
      <ProfileEditModal
        status={isEdit}
        currentEdit={currentEdit}
        onCancel={() => setIsEdit(false)}
      />
    </View>
  );
}
