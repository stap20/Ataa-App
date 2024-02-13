import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default Plus = ({
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
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M4.1 8h7.8M8 4.1v7.8"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
