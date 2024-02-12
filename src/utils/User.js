export default class User {
  static name = "";
  static email = "";
  static phoneNumber = "";
  static password = "";
  static profileImage = null;
  static isAdmin = false;
  static isLoggedIn = false;

  static login(
    name,
    email,
    phoneNumber,
    profileImage,
    password,
    isAdmin = false
  ) {
    User.name = name;
    User.email = email;
    User.password = password;
    User.phoneNumber = phoneNumber;
    User.profileImage = profileImage;
    User.isAdmin = isAdmin;
    User.isLoggedIn = true;

    console.log(`${User.name} logged in.`);
  }

  static logout() {
    console.log(`${User.username} logged out.`);
    User.username = "";
    User.email = "";
    User.isAdmin = false;
    User.isLoggedIn = false;

    User.name = "";
    User.email = "";
    User.password = "";
    User.phoneNumber = "";
    User.profileImage = "";
    User.isAdmin = false;
    User.isLoggedIn = false;
  }

  static checkAdmin() {
    return User.isAdmin;
  }
}
