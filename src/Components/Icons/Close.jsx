import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default Close = ({
  width = 24,
  height = 24,
  color = "#fff",
  svgFill = null,
  pathFill = null,
  ...props
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3 3l6 6M3 9l6-6"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
