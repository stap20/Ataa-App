import { useState } from "react";
import LayoutManager from "./LayoutManager";
import { pendingHandler } from "@services";
const data = pendingHandler.getPendingDonations();

export default function PendingScreen() {
  const [donationData, setDonationData] = useState(data);

  const filterData = (number) => {
    const updatedData = donationData.filter(
      (item) => item.donationNumber !== number
    );
    setDonationData(updatedData);
  };

  const onCancel = (number) => {
    filterData(number);
    pendingHandler.cancelPendingDonation();
  };

  const onAccept = (number) => {
    filterData(number);
    pendingHandler.acceptPendingDonation();
  };

  const onDecline = (number) => {
    filterData(number);
    pendingHandler.declinePendingDonation();
  };

  const refreshFunction = async () => {
    setDonationData(pendingHandler.getPendingDonations());
  };

  return (
    <LayoutManager
      data={donationData}
      isAdmin={false}
      onCancel={onCancel}
      onAccept={onAccept}
      onDecline={onDecline}
      refreshFunction={refreshFunction}
    />
  );
}
