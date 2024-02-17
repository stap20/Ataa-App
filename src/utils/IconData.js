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
    width: 30,
    height: 30,
    stroke: "white",
  },

  "cloth-lg": {
    type: "svg",
    source: require("@assets/icons/shirt.js"),
    width: 42,
    height: 42,
    stroke: iconColors.category,
  },

  "school-tools": {
    type: "svg",
    source: require("@assets/icons/ruler-pen.js"),
    width: 30,
    height: 30,
    stroke: "white",
  },

  "school-tools-lg": {
    type: "svg",
    source: require("@assets/icons/ruler-pen.js"),
    width: 42,
    height: 42,
    stroke: iconColors.category,
  },

  games: {
    type: "svg",
    source: require("@assets/icons/games.js"),
    width: 30,
    height: 30,
    stroke: "white",
  },

  "games-lg": {
    type: "svg",
    source: require("@assets/icons/games.js"),
    width: 42,
    height: 42,
    stroke: iconColors.category,
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

  "login-image": {
    type: "svg",
    source: require("@assets/icons/rafiki.js"),
    width: 214,
    height: 181,
  },

  "hello-image": {
    type: "svg",
    source: require("@assets/icons/character.js"),
    width: 184,
    height: 295,
  },

  "instruction-image": {
    type: "svg",
    source: require("@assets/icons/pana.js"),
    width: 315,
    height: 201,
  },

  "quantity-plus": {
    type: "svg",
    source: require("@assets/icons/plus.js"),
    width: 15.6,
    height: 15.6,
    stroke: "white",
  },

  "quantity-minus": {
    type: "svg",
    source: require("@assets/icons/minus.js"),
    width: 15.6,
    height: 15.6,
    stroke: "white",
  },

  "status-success": {
    type: "svg",
    source: require("@assets/icons/success.js"),
    width: 78,
    height: 78,
  },

  "status-failed": {
    type: "svg",
    source: require("@assets/icons/failed.js"),
    width: 52,
    height: 52,
  },

  "donate-plus": {
    type: "svg",
    source: require("@assets/icons/plus.js"),
    width: 24,
    height: 24,
    stroke: "black",
  },

  "donate-cancel": {
    type: "svg",
    source: require("@assets/icons/cancel.js"),
    width: 11,
    height: 11,
    stroke: "white",
  },

  "modal-close": {
    type: "svg",
    source: require("@assets/icons/cancel.js"),
    width: 40,
    height: 40,
    stroke: "white",
  },

  "donate-camera": {
    type: "svg",
    source: require("@assets/icons/donate-camera.js"),
    width: 30,
    height: 30,
  },
  "donate-gallery": {
    type: "svg",
    source: require("@assets/icons/gallery.js"),
    width: 30,
    height: 30,
  },
};

export default iconData;
