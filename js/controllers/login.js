import loginView from "../views/login/login.view.js";
import * as model from "../model.js";

const init = () => {
  loginView.render();
  loginView.bindLoginHandler(controlLogin);
};

const controlLogin = async () => {
  const data = loginView.getFormData();

  await model.login(data);

  console.log(model.state.response);

  if (model.state.response.status === 200) {
    loginView.redirectTo("dashboard");
  }
};

init();
