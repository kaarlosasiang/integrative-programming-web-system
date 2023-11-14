export default class View {
  appContainer = document.getElementById("app");

  render() {
    this.appContainer.innerHTML = "";
    this.appContainer.innerHTML = this.generateAppMarkup();
  }

  generateAppMarkup() {
    throw new Error("This is an abstract method!")
  }

  redirectTo() {}

  logout() {}
}
