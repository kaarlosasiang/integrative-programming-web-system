import loginView from "../views/login/login.view.js";
import * as model from "../model.js";
import * as helpers from "../helpers.js";

const init = () => {
  if (!helpers.checkLogin()) {
    loginView.render();
    loginView.bindLoginHandler(controlLogin);
  } else {
    loginView.redirectTo("index");
  }
};

const controlLogin = async () => {
  const data = loginView.getFormData();

  await model.login(data);

  console.log(model.state.response);

  if (model.state.response.status === 200) {
    helpers.StoreUserDetails("1");
    loginView.redirectTo("index");
  } else if (model.state.response.response.status === 409) {
    loginView.showToast("Password or Email is incorrect!", "error");
  } else {
    loginView.showToast(
      "There was a problem while trying to log you in!",
      "error"
    );
  }
};

init();
