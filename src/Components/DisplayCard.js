import { Image, StyleSheet, Text, View } from "react-native";
import ShowProfileImage from "./ShowProfileImage";
import MyUser from "../OurUser";
import IconManager from "./Icons/IconManager";
import StatusCard from "./StatusCard";

export default function DisplayCard({ type = 1 }) {
  btns = [];
  switch (type) {
    case 1:
      btns.push(
        <View style={card.actionBtn}>
          <Text style={card.actionText}>{`إلغاء`}</Text>
        </View>
      );
      break;
    case 2:
      btns.push(
        <View style={card.actionBtn} key={1}>
          <Text style={card.actionText}>{`رفض`}</Text>
        </View>
      );
      btns.push(
        <View style={[card.actionBtn, { backgroundColor: "#198754" }]} key={2}>
          <Text style={card.actionText}>{`قبول`}</Text>
        </View>
      );
      break;
    case 3:
      btns.push(
        <View style={card.actionBtn} key={1}>
          <Text style={card.actionText}>{`حذف`}</Text>
        </View>
      );
      btns.push(
        <View style={[card.actionBtn, { backgroundColor: "#007BFF" }]} key={2}>
          <Text style={card.actionText}>{`تعديل`}</Text>
        </View>
      );
      break;
  }
  return (
    <View style={styles.cotainer}>
      <View style={card.header}>
        <View style={card.profileContainer}>
          <View
            style={{
              flex: 1,
              justifyContent: "space-evenly",
            }}
          >
            <Text style={card.fullnameText}>{MyUser.getFullname()}</Text>
            <Text style={card.orderIdText}>
              {type != 3 ? "#12345" : MyUser.user.phoneNumber}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <ShowProfileImage size={48} />
          </View>
        </View>
        <View style={card.cardInfoContainer}>
          {type != 3 ? (
            <>
              <View
                style={{
                  flex: 1,
                  justifyContent: "space-evenly",
                }}
              >
                <Text style={card.typeText}>{`التبرع بالملابس`}</Text>
                <Text style={card.quantityText}>{`الكمية: 10`}</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View style={card.typeIconContainer}>
                  <IconManager
                    name={"shirt"}
                    pathFill={"#fff"}
                    width={28}
                    height={28}
                  />
                </View>
              </View>
            </>
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <Image
                source={require("../../assets/badge.png")}
                style={{ aspectRatio: 1 / 1, height: 24 }}
              />
            </View>
          )}
        </View>
      </View>
      <View style={card.actions}>
        {type != 3 ? (
          <View style={card.statusAndDateContainer}>
            <View style={card.statusContainer}>
              <StatusCard />
            </View>
            <View style={card.dateContainer}>
              <Text style={card.dateText}>{"2024/07/12"}</Text>
              <IconManager name="calendar" width={16} height={16} />
            </View>
          </View>
        ) : (
          <></>
        )}
        {/* <View style={card.cardActionsContainer}>{btns.map((c) => c)}</View> */}
      </View>
    </View>
  );
}

const card = StyleSheet.create({
  header: {
    flex: 2,
    flexDirection: "row-reverse",
    backgroundColor: "yellow",
    paddingBottom: 16,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E6E9EA",
  },
  profileContainer: {
    flex: 1,
    flexDirection: "row",
  },
  fullnameText: {
    textAlign: "right",
  },
  orderIdText: {
    textAlign: "right",
  },

  cardInfoContainer: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: "lightgreen",
  },
  typeText: {
    textAlign: "right",
  },
  quantityText: {
    textAlign: "right",
  },
  typeIconContainer: {
    aspectRatio: 1 / 1,
    height: 48,
    borderRadius: 10,
    backgroundColor: "#CB8949",
    justifyContent: "center",
    alignItems: "center",
  },

  actions: {
    flex: 3,
    backgroundColor: "lightblue",
  },
  statusAndDateContainer: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: "lightgreen",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statusContainer: {},
  dateContainer: {
    flexDirection: "row",
    gap: 8,
  },

  cardActionsContainer: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  actionBtn: {
    flex: 1,
    height: 39,
    // width: "100%",
    borderRadius: 100,
    backgroundColor: "#DC3545",
    justifyContent: "center",
    alignItems: "center",
  },
  actionText: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 15.4,
    color: "#FFFFFF",
  },
});

const styles = StyleSheet.create({
  cotainer: {
    // flex: 1,
    width: "100%",
    minHeight: 159,
    // maxHeight: 197,
    padding: 20,
    backgroundColor: "#FFFFFF",
    // gap: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E6E9EA",
  },
});
