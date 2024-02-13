import { useState } from "react";
import LayoutManager from "./LayoutManager";
import { storageHnadler } from "@services";
const data = storageHnadler.getStorageData();

export default function StorageScreen() {
  const [storageData, setStorageData] = useState(data);

  const refreshFunction = async () => {
    setStorageData(storageHnadler.getStorageData());
  };

  const onDelete = () => {
    storageHnadler.emptyStorage();
    setStorageData([]);
  };
  return (
    <LayoutManager
      data={storageData}
      refreshFunction={refreshFunction}
      onDelete={onDelete}
    />
  );
}
