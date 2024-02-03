import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default History = ({
  width = 24,
  height = 24,
  pathFill = null,
  color = "#0C0C0C",
  svgFill = null,
  ...props
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={svgFill || color}
    {...props}
  >
    <Path
      stroke={pathFill || color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 3v5h5"
    />
    <Path
      stroke={pathFill || color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.05 13A9 9 0 1 0 6 5.3L3 8"
    />
    <Path
      stroke={pathFill || color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 7v5l4 2"
    />
  </Svg>
);
