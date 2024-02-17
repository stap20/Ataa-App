import USER_NAVIGATION_LIST from "./USER_NAVIGATION_LIST";
import MODERATOR_NAVIGATION_LIST from "./MODERATOR_NAVIGATION_LIST";
import ADMIN_NAVIGATION_LIST from "./ADMIN_NAVIGATION_LIST";

const navigationList = {
  user: { list: USER_NAVIGATION_LIST, default: "waiting" },
  moderator: { list: MODERATOR_NAVIGATION_LIST, default: "waiting" },
  admin: { list: ADMIN_NAVIGATION_LIST, default: "moderators" },
};

export default navigationList;
