import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default Eye = ({
  width = 24,
  height = 24,
  color = "#C9CECF",
  svgFill = null,
  pathFill = null,
  ...props
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2.75 9.15C5.06 5.52 8.44 3.43 12 3.43c1.78 0 3.51.52 5.09 1.49 1.58.98 3 2.41 4.16 4.23 1 1.57 1 4.12 0 5.69-2.31 3.64-5.69 5.72-9.25 5.72-1.78 0-3.51-.52-5.09-1.49-1.58-.98-3-2.41-4.16-4.23-1-1.56-1-4.12 0-5.69zM12 16.04c2.24 0 4.04-1.81 4.04-4.04S14.24 7.96 12 7.96 7.96 9.77 7.96 12s1.8 4.04 4.04 4.04z"
      fill={color}
    />
    <Path
      d="M12 9.14a2.855 2.855 0 010 5.71c-1.57 0-2.86-1.28-2.86-2.85S10.43 9.14 12 9.14z"
      fill={color}
    />
  </Svg>
);
