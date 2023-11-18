import "../../assets/js/app.min.js";
import "../../assets/js/theme/default.min.js";
import sweetalert2 from 'https://cdn.jsdelivr.net/npm/sweetalert2@11.10.0/+esm'

export default class View {
  appContainer = document.getElementById("app");
  Toast = sweetalert2.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", sweetalert2.stopTimer);
      toast.addEventListener("mouseleave", sweetalert2.resumeTimer);
    },
  });

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

  redirectTo() {}

  logout() {}
}
