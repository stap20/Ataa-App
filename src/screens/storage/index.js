import { useEffect, useState } from "react";
import LayoutManager from "./LayoutManager";
import { storageHnadler } from "@services";

export default function StorageScreen() {
  const [storageData, setStorageData] = useState([]);

  useEffect(() => {
    storageHnadler.getStorageData().then((result) => {
      setStorageData(result);
    });
  }, []);

  const refreshFunction = async () => {
    storageHnadler.getStorageData().then((result) => {
      setStorageData(result);
    });
  };

  const onDelete = () => {
    storageHnadler.emptyStorage().then((result) => {
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
