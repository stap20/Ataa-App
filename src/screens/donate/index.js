import { useEffect, useState } from "react";
import LayoutManager from "./LayoutManager";
import { donationHandler } from "@services";
import { useNavigation } from "@react-navigation/native";
import DonateShowStatus from "@components/DonateShowStatus";

export default function DonateScreen() {
  const [showDonateStatus, setShowDonateStatus] = useState(false);
  const [status, setStatus] = useState(null);

  const navigation = useNavigation();
  const onSave = (data) => {
    // console.log(data);
    donationHandler.createDonation(data).then((isIssue) => {
      // console.log(isIssue);

      if (!isIssue) {
        setStatus("success");
      } else {
        setStatus("failed_storage");
      }
      setShowDonateStatus(true);
    });
  };

  return (
    <>
      <LayoutManager onSave={onSave} />
      {showDonateStatus && (
        <DonateShowStatus
          showStatus={showDonateStatus}
          reqClose={() => {
            setShowDonateStatus(false);
            navigation.navigate("waiting");
          }}
          status={status}
        />
      )}
    </>
  );
}
