import "../../assets/js/app.min.js";
import "../../assets/js/theme/default.min.js";
import sweetalert2 from "../../assets/js/sweetalert2.js";
import * as helpers from "../helpers.js";

export default class View {
  appContainer = document.getElementById("app");
  Toast = sweetalert2.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", sweetalert2.stopTimer);
      toast.addEventListener("mouseleave", sweetalert2.resumeTimer);
    },
  });
  courses = {
    fcdset: ["BSIT", "BSCE", "BITM", "BSM", "BSMRS"],
    fnahs: ["BSN"],
    fgbm: ["BSCRIM", "BSBA", "BSHM"],
  };

  render() {
    this.appContainer.innerHTML = "";
    this.appContainer.innerHTML = this.generateAppMarkup();
  }

  generateAppMarkup() {
    throw new Error("This is an abstract method!");
  }

  showToast(title = "No message", icon = "error") {
    this.Toast.fire({
      icon,
      title,
    });
  }

  redirectTo(page) {
    window.location.href = `${page}.html`;
  }

  logout() {
    helpers.deleteDataLocalStorage("uid");
    helpers.deleteDataLocalStorage("current_user");
  }
}
