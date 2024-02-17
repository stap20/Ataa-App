import { useEffect, useState } from "react";
import LayoutManager from "./LayoutManager";
import { moderatorHandler } from "@services";
import { ProfileEditModal } from "@components";

export default function ModeratorScreen() {
  const [moderatorsData, setModeratorData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [currentId, setCurrentId] = useState(null);

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

  const showEdit = (id) => {
    console.log(id);
    setCurrentId(id);
    setIsEdit(true);
  };

  return (
    <>
      <LayoutManager
        data={moderatorsData}
        refreshFunction={refreshFunction}
        onDelete={onDelete}
        onEdit={showEdit}
      />
      <ProfileEditModal
        status={isEdit}
        id={currentId}
        onCancel={() => setIsEdit(false)}
      />
    </>
  );
}
