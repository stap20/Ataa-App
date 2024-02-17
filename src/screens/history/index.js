import { useEffect, useState } from "react";
import LayoutManager from "./LayoutManager";
import { historyHandler } from "@services";
import { LoadingContextHandler } from "@utils";
export default function HistoryScreen() {
  const [donationData, setDonationData] = useState([]);
  const { showLoading, setShowLoading } =
    LoadingContextHandler.useLoadingContext();
  useEffect(() => {
    setShowLoading(true);
    historyHandler.getHistoryDonations().then((result) => {
      setDonationData(result);
      setShowLoading(false);
    });
  }, []);

  const refreshFunction = async () => {
    historyHandler.getHistoryDonations().then((result) => {
      setDonationData(result);
    });
  };

  return (
    <LayoutManager data={donationData} refreshFunction={refreshFunction} />
  );
}
