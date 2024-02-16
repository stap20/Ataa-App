import { useEffect, useState } from "react";
import LayoutManager from "./LayoutManager";
import { historyHandler } from "@services";

export default function HistoryScreen() {
  const [donationData, setDonationData] = useState([]);

  useEffect(() => {
    historyHandler.getHistoryDonations().then((result) => {
      setDonationData(result);
    });
  },[]);

  const refreshFunction = async () => {
    historyHandler.getHistoryDonations().then((result) => {
      setDonationData(result);
    });
  };

  return (
    <LayoutManager data={donationData} refreshFunction={refreshFunction} />
  );
}
