import Storage from "./Components/Storage";

export default class MyUser {
  static user = {
    id: 1,
    firstName: "أحمد",
    lastName: "ًصالح",
    password: "123",
    email: "Saleh@email.com",
    profileImage: "assets/Profile Image Ex.png",
    phoneNumber: "12345678",
  };

  static getMyUser() {
    return this.user;
  }

  static setMyUser(data) {
    this.user = data;

    return this.user;
  }

  static logOut = async (next) => {
    await Storage.storeData("UserData", {});

    // API Logout
    // ..........

    next();
    return;
  };
}
