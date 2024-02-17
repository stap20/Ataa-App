import { useEffect, useState } from "react";
import LayoutManager from "./LayoutManager";
import { moderatorHandler } from "@services";
import { LoadingContextHandler } from "@utils";
export default function ModeratorScreen() {
  const [moderatorsData, setModeratorData] = useState([]);
  const { showLoading, setShowLoading } =
    LoadingContextHandler.useLoadingContext();

  useEffect(() => {
    setShowLoading(true);
    moderatorHandler.getModerators().then((result) => {
      setModeratorData(result);
      setShowLoading(false);
    });
  }, []);

  const refreshFunction = async () => {
    moderatorHandler.getModerators().then((result) => {
      setModeratorData(result);
    });
  };

  const onDelete = (id) => {
    setShowLoading(true);
    moderatorHandler.deleteModerator(id).then((result) => {
      setShowLoading(false);
      if (result) {
        refreshFunction();
      }
    });
  };

  // const onEdit = (id) => {
  //   console.log("onEdit");
  // };

  return (
    <LayoutManager
      data={moderatorsData}
      refreshFunction={refreshFunction}
      onDelete={onDelete}
      // onEdit={onEdit}
    />
  );
}
