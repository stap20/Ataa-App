import { useEffect, useState } from "react";
import LayoutManager from "./LayoutManager";
import { pendingHandler } from "@services";
import { User } from "@utils";
import { LoadingContextHandler } from "@utils";
export default function PendingScreen() {
  const [donationData, setDonationData] = useState([]);
  const { showLoading, setShowLoading } =
    LoadingContextHandler.useLoadingContext();
  useEffect(() => {
    setShowLoading(true);
    pendingHandler.getPendingDonations().then((result) => {
      setShowLoading(false);
      setDonationData(result);
    });
    // s
  }, []);

  const filterData = (id) => {
    refreshFunction();
  };

  const onCancel = (id) => {
    setShowLoading(true);
    pendingHandler.cancelPendingDonation(id).then((result) => {
      setShowLoading(false);
      if (result) {
        filterData(id);
      }
    });
  };

  const onAccept = (id) => {
    setShowLoading(true);
    pendingHandler.acceptPendingDonation(id).then((result) => {
      setShowLoading(false);
      if (result) {
        filterData(id);
      }
    });
  };

  const onDecline = (id) => {
    setShowLoading(true);
    pendingHandler.declinePendingDonation(id).then((result) => {
      setShowLoading(false);
      if (result) {
        filterData(id);
      }
    });
  };

  const refreshFunction = async () => {
    pendingHandler.getPendingDonations().then((result) => {
      setDonationData(result);
    });
  };

  return (
    <LayoutManager
      data={donationData}
      isAdmin={User.role != "user"}
      onCancel={onCancel}
      onAccept={onAccept}
      onDecline={onDecline}
      refreshFunction={refreshFunction}
    />
  );
}
