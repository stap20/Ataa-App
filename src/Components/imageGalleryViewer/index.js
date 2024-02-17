import { useEffect, useState } from "react";
import GridView from "./GridView";
import ImageShowModal from "@components/ImageShowModal";

export default function ImageGalleryViewer({
  isRemoveEnable,
  onRemove,
  imagesList = [],
  onAdd,
}) {
  const [showImageModal, setShowImageModal] = useState(false);
  const [img, setImg] = useState({});

  return (
    <>
      <GridView
        isRemoveEnable={isRemoveEnable}
        onRemove={(id) => onRemove(id)}
        data={imagesList}
        extraData={imagesList.length}
        onAdd={onAdd}
        onShowImage={(img) => {
          setImg(img);
          setShowImageModal(true);
        }}
      />
      <ImageShowModal
        status={showImageModal}
        image={img}
        onCancel={() => setShowImageModal(false)}
      />
    </>
  );
}
