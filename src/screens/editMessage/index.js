import { useEffect, useState } from "react";
import LayoutManager from "./LayoutManager";
import { editMessageHandler } from "@services";

export default function EditMessageScreen() {
  const [messagesData, setMessagesData] = useState(null);
  // const messagesData = editMessageHandler.getEditMessages();

  useEffect(() => {
    editMessageHandler.getEditMessages().then((result) => {
      setMessagesData(result);
    });
  }, []);

  const onSave = (data) => {
    editMessageHandler.updateEditMessages(data);
  };

  return (
    <>{messagesData && <LayoutManager data={messagesData} onSave={onSave} />}</>
  );
}
