import { useEffect, useState } from "react";
import { RefreshControl, View } from "react-native";
import { historyStyles } from "@styles/screens/history";
import { FlashList } from "@shopify/flash-list";
import { DonateCard, DonationViewModal } from "@components";
import { Theme } from "@theme";
import { ImagePickerHandler } from "@utils";
import EmptyPageHandler from "@components/EmptyPageHandler";

export default function HistoryView({ data, refreshFunction }) {
  const [refreshing, setRefreshing] = useState(false);
  const [showFullView, setShowFullView] = useState(false);
  const [images, setImages] = useState([]);
  const [selectedDescription, setSelectedDescription] = useState("0");
  const styles = historyStyles();

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
    <View style={[styles.container]}>
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
