import { StyleSheet, View } from "react-native";
import Box from "./Box";
import Profile from "./Profile";
import History from "./History";
import TimeAtack from "./TimeAtack";
import Camera from "./Camera";
import Shirt from "./Shirt";
import Calendar from "./Calendar";
import Rafiki from "./Rafiki";
import Eye from "./Eye";
import OnBoardHello from "./OnBoardHello";
import OnBoardPana from "./OnBoardPana";
import Plus from "./Plus";
import Minus from "./Minus";
import Close from "./Close";

const IconSwitcher = ({ name, color, width, height, svgFill, pathFill }) => {
  const options = {
    box: Box,
    profile: Profile,
    history: History,
    time_atack: TimeAtack,
    camera: Camera,
    shirt: Shirt,
    calendar: Calendar,
    rafiki: Rafiki,
    eye: Eye,
    onBoardHello: OnBoardHello,
    onBoardPana: OnBoardPana,
    plus: Plus,
    minus: Minus,
    close: Close,
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
        name={name.toLowerCase()}
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
