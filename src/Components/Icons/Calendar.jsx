import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default Calendar = ({
  width = 24,
  height = 24,
  pathFill = "#0C0C0C",
  color = "none",
  svgFill = null,
  ...props
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 17 16"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M6.272 1.333v2M11.606 1.333v2M3.272 6.06h11.334M14.939 5.667v5.666c0 2-1 3.334-3.333 3.334H6.272c-2.333 0-3.333-1.334-3.333-3.334V5.667c0-2 1-3.334 3.333-3.334h5.334c2.333 0 3.333 1.334 3.333 3.334z"
      stroke={pathFill}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.936 9.133h.006M6.469 9.133h.006M6.469 11.133h.006"
      stroke={pathFill}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
