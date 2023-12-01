import loginView from "../views/login/login.view.js";
import * as model from "../model.js";
import * as helpers from "../helpers.js";

const init = () => {
  if (!helpers.checkLogin()) {
    loginView.render();
    loginView.bindLoginHandler(controlLogin);
  } else {
    controlLogout();
    loginView.redirectTo("index");
  }
};

const controlLogout = () => {
  const urlParams = new URLSearchParams(window.location.search);

  const isLogout = urlParams.get("logout");

  if (isLogout) {
    loginView.logout();
  }
};

const controlLogin = async () => {
  const data = loginView.getFormData();

  await model.login(data);

  const res = model.state.response;

  console.log(res);

  if (res.status === 200) {
    helpers.storeToLocalStorage("uid", res.data.user_id);
    helpers.storeToLocalStorage(
      "current_user",
      JSON.stringify({
        firstname: res.data.firstname,
        lastname: res.data.lastname,
      })
    );
    loginView.redirectTo("index");
  } else if (res.response.status === 409) {
    loginView.showToast("Password or Email is incorrect!", "error");
  } else {
    loginView.showToast(
      "There was a problem while trying to log you in!",
      "error"
    );
  }
};

init();
