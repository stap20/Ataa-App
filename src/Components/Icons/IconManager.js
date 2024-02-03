import Box from "./Box";
import Profile from "./Profile";
import History from "./History";
import TimeAtack from "./TimeAtack";
import Camera from "./Camera";
import { StyleSheet, View } from "react-native";

const IconSwitcher = ({
  name,
  color,
  width = 40,
  height = 40,
  svgFill,
  pathFill,
}) => {
  // width, height, color, svgFill, pathFill

  const options = {
    box: Box,
    profile: Profile,
    history: History,
    time_atack: TimeAtack,
    camera: Camera,
  };

  const CurrentIcon = options[name] !== undefined ? options[name] : null;

  return (
    <CurrentIcon
      color={color}
      width={width}
      height={height}
      svgFill={svgFill}
      pathFill={pathFill}
    />
  );
};

export default IconManager = ({
  containerStyle,
  name,
  color,
  svgFill = "#FFFFFF",
  pathFill = "#000000",
  width,
  height,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <IconSwitcher
        name={name}
        color={color}
        width={width}
        height={height}
        svgFill={svgFill}
        pathFill={pathFill}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
