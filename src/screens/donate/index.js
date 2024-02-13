import { useState } from "react";
import LayoutManager from "./LayoutManager";
import { historyHandler } from "@services";
const data = historyHandler.getHistoryDonations();

export default function DonateScreen() {
  const [donationData, setDonationData] = useState(data);

  const refreshFunction = async () => {
    setDonationData(historyHandler.getHistoryDonations());
  };

  return (
    <LayoutManager data={donationData} refreshFunction={refreshFunction} />
  );
}
