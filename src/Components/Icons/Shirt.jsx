import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default Shirt = ({
  width = 24,
  height = 24,
  pathFill = "#ffffff",
  color = "none",
  svgFill = null,
  ...props
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 30 30"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M18.659 3.3s-1.285.45-3.304.45-3.304-.45-3.304-.45c-.203 0-.405.034-.597.101L2.716 6.45l.939 4.95 2.758.31a1.355 1.355 0 011.2 1.383L7.23 26.7h16.25l-.384-13.607a1.347 1.347 0 011.201-1.383l2.758-.31.938-4.95-8.738-3.049a1.807 1.807 0 00-.596-.101z"
      stroke={pathFill}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19.717 3.562a4.5 4.5 0 01-1.611 2.41 4.523 4.523 0 01-5.502 0 4.5 4.5 0 01-1.611-2.41"
      stroke={pathFill}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
