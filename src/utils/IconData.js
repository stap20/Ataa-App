import { Theme } from "@theme";

const iconColors = Theme.iconColors;

const iconData = {
  pending: {
    type: "svg",
    source: require("@assets/icons/pending.js"),
    width: 24,
    height: 24,
  },
  "pending-active": {
    type: "svg",
    source: require("@assets/icons/pending-active.js"),
    width: 24,
    height: 24,
  },
  history: {
    type: "svg",
    source: require("@assets/icons/history.js"),
    width: 24,
    height: 24,
  },
  "history-active": {
    type: "svg",
    source: require("@assets/icons/history-active.js"),
    width: 24,
    height: 24,
  },
  donate: {
    type: "svg",
    source: require("@assets/icons/donate.js"),
    width: 24,
    height: 24,
  },
  "donate-active": {
    type: "svg",
    source: require("@assets/icons/donate-active.js"),
    width: 24,
    height: 24,
  },
  profile: {
    type: "svg",
    source: require("@assets/icons/profile.js"),
    width: 24,
    height: 24,
  },
  "profile-active": {
    type: "svg",
    source: require("@assets/icons/profile-active.js"),
    width: 24,
    height: 24,
  },

  moderator: {
    type: "svg",
    source: require("@assets/icons/badge.js"),
    width: 24,
    height: 24,
  },
  "moderator-active": {
    type: "svg",
    source: require("@assets/icons/badge-active.js"),
    width: 24,
    height: 24,
  },

  categories: {
    type: "svg",
    source: require("@assets/icons/category.js"),
    width: 24,
    height: 24,
  },
  "categories-active": {
    type: "svg",
    source: require("@assets/icons/category-active.js"),
    width: 24,
    height: 24,
  },

  edit: {
    type: "svg",
    source: require("@assets/icons/edit.js"),
    width: 24,
    height: 24,
  },
  "edit-active": {
    type: "svg",
    source: require("@assets/icons/edit-active.js"),
    width: 24,
    height: 24,
  },

  storage: {
    type: "svg",
    source: require("@assets/icons/shop.js"),
    width: 24,
    height: 24,
  },
  "storage-active": {
    type: "svg",
    source: require("@assets/icons/shop-active.js"),
    width: 24,
    height: 24,
  },

  cloth: {
    type: "svg",
    source: require("@assets/icons/shirt.js"),
    width: 29,
    height: 29,
    stroke: "white",
  },

  calendar: {
    type: "svg",
    source: require("@assets/icons/calendar.js"),
    width: 16,
    height: 16,
    stroke: iconColors.calendar,
  },

  visible: {
    type: "svg",
    source: require("@assets/icons/visible.js"),
    width: 24,
    height: 24,
    color: iconColors.visible,
  },

  camera: {
    type: "svg",
    source: require("@assets/icons/camera.js"),
    width: 42,
    height: 42,
    color: iconColors.camera,
  },

  "profile-image": {
    type: "svg",
    source: require("@assets/icons/profile-image.js"),
    width: 35,
    height: 35,
  },

  "delete-storage": {
    type: "svg",
    source: require("@assets/icons/trash.js"),
    width: 24,
    height: 24,
  },
};

export default iconData;
