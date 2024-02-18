import { useEffect, useState } from "react";
import { View, RefreshControl } from "react-native";
import { pendingStyles } from "@styles/screens/pending";
import { FlashList } from "@shopify/flash-list";
import { DonateCard } from "@components";
import { Theme } from "@theme";
import EmptyPageHandler from "@components/EmptyPageHandler";
import DonationViewModal from "@components/DonationViewModal";

export default function PendingView({
  data,
  isAdmin,
  onCancel,
  onAccept,
  onDecline,
  refreshFunction,
}) {
  const [refreshing, setRefreshing] = useState(false);
  const [showFullView, setShowFullView] = useState(false);
  const [images, setImages] = useState([]);
  const [selectedDescription, setSelectedDescription] = useState("0");
  const styles = pendingStyles();

  const onRefresh = () => {
    setRefreshing(true);

    // Call the refresh function passed from the parent component
    refreshFunction().then(() => {
      setRefreshing(false);
    });
  };

  const onCard = (index) => {
    setSelectedDescription(data[index].donationDescription);
    setImages(data[index].imagesList);
    setShowFullView(true);
  };

  useEffect(() => {
    onRefresh();
  }, []);

  return (
    <View style={styles.container}>
      {data.length == 0 && (
        <EmptyPageHandler
          style={{
            alignSelf: "center",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        />
      )}
      <FlashList
        data={data}
        renderItem={({ item, index }) => (
          <DonateCard
            onCard={() => onCard(index)}
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
      <DonationViewModal
        status={showFullView}
        onCancel={() => {
          setShowFullView(false);
        }}
        images={images} // uri
        description={selectedDescription} // API
      />
    </View>
  );
}
