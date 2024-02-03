import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default TimeAtack = ({
  width = 24,
  height = 24,
  color = "#0C0C0C",
  svgFill = null,
  pathFill = null,
  ...props
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={"none"} // white
    {...props}
  >
    <Path
      fill={svgFill || "white"}
      stroke={pathFill || color}
      strokeWidth={1.5}
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
    />
    <Path
      fill={pathFill || color} // 3/4 round
      d="M12 6.5c0-.24 0-.359.08-.433.082-.074.194-.065.42-.046a6 6 0 1 1-5.428 9.401c-.13-.186-.194-.279-.17-.386.024-.107.128-.166.335-.286l4.513-2.606c.122-.07.183-.105.216-.163.034-.058.034-.129.034-.27V6.5Z"
    />
  </Svg>
);
