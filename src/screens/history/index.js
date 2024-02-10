import LayoutManager from "./LayoutManager";

const data = [
  {
    donatorName: "أحمد صالح",
    donationNumber: "#123456",
    quantity: 10,
    status: "accepted",
    date: new Date(),
    profileImg: null,
  },
  {
    donatorName: "أحمد صالح",
    donationNumber: "#123456",
    quantity: 10,
    status: "declined",
    date: new Date(),
    profileImg: null,
  },
  {
    donatorName: "أحمد صالح",
    donationNumber: "#123456",
    quantity: 10,
    status: "pending",
    date: new Date(),
    profileImg: null,
  },
  {
    donatorName: "أحمد صالح",
    donationNumber: "#123456",
    quantity: 10,
    status: "accepted",
    date: new Date(),
    profileImg: null,
  },
  {
    donatorName: "أحمد صالح",
    donationNumber: "#123456",
    quantity: 10,
    status: "accepted",
    date: new Date(),
    profileImg: null,
  },
  {
    donatorName: "أحمد صالح",
    donationNumber: "#123456",
    quantity: 10,
    status: "accepted",
    date: new Date(),
    profileImg: null,
  },
];

export default function HistoryScreen() {
  return <LayoutManager data={data} />;
}
