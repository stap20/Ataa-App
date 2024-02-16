import { useEffect, useState } from "react";
import LayoutManager from "./LayoutManager";
import { pendingHandler } from "@services";
import { User } from "@utils";

export default function PendingScreen() {
  const [donationData, setDonationData] = useState([]);

  useEffect(() => {
    pendingHandler.getPendingDonations().then((result) => {
      setDonationData(result);
    });
  }, []);

  const filterData = (id) => {
    refreshFunction();
  };

  const onCancel = (id) => {
    pendingHandler.cancelPendingDonation(id).then((result) => {
      if (result) {
        filterData(id);
      }
    });
  };

  const onAccept = (id) => {
    pendingHandler.acceptPendingDonation(id).then((result) => {
      if (result) {
        filterData(id);
      }
    });
  };

  const onDecline = (id) => {
    pendingHandler.declinePendingDonation(id).then((result) => {
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
