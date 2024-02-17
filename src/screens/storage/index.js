import { useEffect, useState } from "react";
import LayoutManager from "./LayoutManager";
import { storageHnadler } from "@services";
import { LoadingContextHandler } from "@utils";
export default function StorageScreen() {
  const [storageData, setStorageData] = useState([]);
  const { showLoading, setShowLoading } =
    LoadingContextHandler.useLoadingContext();
  useEffect(() => {
    setShowLoading(true);
    storageHnadler.getStorageData().then((result) => {
      setShowLoading(false);
      setStorageData(result);
    });
  }, []);

  const refreshFunction = async () => {
    storageHnadler.getStorageData().then((result) => {
      setStorageData(result);
    });
  };

  const onDelete = () => {
    setShowLoading(true);
    storageHnadler.emptyStorage().then((result) => {
      setShowLoading(false);
      if (result) {
        refreshFunction();
      }
    });
  };
  return (
    <LayoutManager
      data={storageData}
      refreshFunction={refreshFunction}
      onDelete={onDelete}
    />
  );
}
