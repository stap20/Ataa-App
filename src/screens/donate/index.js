import { useEffect, useState } from "react";
import LayoutManager from "./LayoutManager";
import { historyHandler } from "@services";
import { LoadingContextHandler } from "@utils";
export default function DonateScreen() {
  const [donationData, setDonationData] = useState([]);
  const { showLoading, setShowLoading } =
    LoadingContextHandler.useLoadingContext();
  useEffect(() => {
    setShowLoading(true);
    historyHandler.getHistoryDonations().then((result) => {
      setShowLoading(false);
      setDonationData(result);
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
