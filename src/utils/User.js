import API_URL from "@services/API_URL";

export default class User {
  static name = "";
  static email = "";
  static phoneNumber = "";
  static password = "";
  static profileImage = null;
  static role = "";
  static isLoggedIn = false;
  static donationTypes = [];

  static login({ name, email, phoneNumber, profileImage, password, role }) {
    User.name = name;
    User.email = email;
    User.password = password;
    User.phoneNumber = phoneNumber;
    User.profileImage = profileImage;
    User.role = role;
    User.isLoggedIn = true;

    console.log(`${User.name} logged in.`);
  }

  static updateData({ name, email, phoneNumber, profileImage, password }) {
    User.name = name;
    User.email = email;
    User.password = password;
    User.phoneNumber = phoneNumber;
    User.profileImage = profileImage;
  }

  static setDonationTypes(types) {
    var donationTypes = {};
    types.map((item) => {
      const { type, ...other } = item;
      donationTypes[type] = other;
    });
    User.donationTypes = donationTypes;
    // console.log(User.donationTypes);
  }

  static getData() {
    const userData = {
      name: User.name,
      email: User.email,
      phoneNumber: User.phoneNumber,
      password: User.password,
      profileImage: User.profileImage,
    };

    return userData;
  }

  static logout() {
    console.log(`${User.name} logged out.`);

    User.name = "";
    User.email = "";
    User.password = "";
    User.phoneNumber = "";
    User.profileImage = "";
    User.role = "";
    User.isLoggedIn = false;
  }

  static checkAdmin() {
    return User.isAdmin;
  }
}
