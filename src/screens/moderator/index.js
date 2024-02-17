import { useEffect, useState } from "react";
import LayoutManager from "./LayoutManager";
import { moderatorHandler } from "@services";

export default function ModeratorScreen() {
  const [moderatorsData, setModeratorData] = useState([]);

  useEffect(() => {
    moderatorHandler.getModerators().then((result) => {
      setModeratorData(result);
    });
  }, []);

  const refreshFunction = async () => {
    moderatorHandler.getModerators().then((result) => {
      setModeratorData(result);
    });
  };

  const onDelete = (id) => {
    moderatorHandler.deleteModerator(id).then((result) => {
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
