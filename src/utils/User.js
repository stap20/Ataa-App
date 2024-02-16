export default class User {
  static name = "";
  static email = "";
  static phoneNumber = "";
  static password = "";
  static profileImage = null;
  static role = "moderator";
  static isLoggedIn = false;

  static login(name, email, phoneNumber, profileImage, password, role) {
    User.name = name;
    User.email = email;
    User.password = password;
    User.phoneNumber = phoneNumber;
    User.profileImage = profileImage;
    User.role = role;
    User.isLoggedIn = true;

    console.log(`${User.name} logged in.`);
  }

  static logout() {
    console.log(`${User.username} logged out.`);
    User.username = "";
    User.email = "";
    User.role = "user";
    User.isLoggedIn = false;

    User.name = "";
    User.email = "";
    User.password = "";
    User.phoneNumber = "";
    User.profileImage = "";
    User.role = "user";
    User.isLoggedIn = false;
  }

  static checkAdmin() {
    return User.isAdmin;
  }
}
