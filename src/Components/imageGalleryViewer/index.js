import { useEffect } from "react";
import GridView from "./GridView";

export default function ImageGalleryViewer({
  removeEnable,
  onRemove,
  imageList,
  extraData,
  onAdd,
}) {
  let data = [];
  useEffect(() => {
    for (let index = 0; index < imageList.length; index++) {
      if (index + 1 > 5) {
        data.pop();
        data.push({ ...imageList[index] });
        break;
      } else {
        data.push({ ...imageList[index] });
      }
    }

    // data.push({ size: 82, icon: props.addIcon });
  }, []);

  return (
    <GridView
      removeEnable={removeEnable}
      onRemove={(id) => onRemove(id)}
      data={data}
      extraData={extraData}
      onAdd={onAdd}
    />
  );
}
