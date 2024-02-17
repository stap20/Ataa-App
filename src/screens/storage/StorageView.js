import { useEffect, useState } from "react";
import { RefreshControl, View } from "react-native";
import { storageStyles } from "@styles/screens/storage";
import { FlashList } from "@shopify/flash-list";
import { DonateCard } from "@components";
import { Theme } from "@theme";
import EmptyPageHandler from "@components/EmptyPageHandler";

export default function StorageView({ data, refreshFunction }) {
  const [refreshing, setRefreshing] = useState(false);
  const [showFullView, setShowFullView] = useState(false);
  const [images, setImages] = useState([]);
  const [selectedDescription, setSelectedDescription] = useState("0");
  const styles = storageStyles();

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
      {data.length == 0 ? (
        <EmptyPageHandler />
      ) : (
        <FlashList
          data={data}
          renderItem={({ item, index }) => (
            <DonateCard
              style={styles.cardContainer}
              onCard={() => onCard(index)}
              data={item}
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
