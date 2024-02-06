import { StyleSheet, Text, View } from "react-native";

export default StatusCard = ({
  status = "waiting",
  statusText = "قيد الانتظار",
}) => {
  return (
    <View style={card.container}>
      <Text style={card.text}>{statusText}</Text>
      <View style={card.circle}></View>
    </View>
  );
};

const card = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 79,
    height: 22,
    backgroundColor: "rgba(254, 176, 82, 0.1)",
    gap: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "500",
    fontSize: 10,
    lineHeight: 18.4,
    textAlign: "right",
    color: "rgba(254, 176, 82, 1)",
  },
  circle: {
    aspectRatio: 1 / 1,
    width: 7,
    borderRadius: 999,
    backgroundColor: "rgba(254, 176, 82, 1)",
  },
});
