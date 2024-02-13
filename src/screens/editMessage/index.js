import LayoutManager from "./LayoutManager";
import { editMessageHandler } from "@services";

export default function EditMessageScreen() {
  const messagesData = editMessageHandler.getEditMessages();

  const onSave = (data) => {
    editMessageHandler.updateEditMessages(data);
  };

  return <LayoutManager data={messagesData} onSave={onSave} />;
}
