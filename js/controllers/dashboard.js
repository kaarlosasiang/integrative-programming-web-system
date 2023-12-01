import DashboardView from "../views/dashboard/dashboard.view.js";
import * as model from "../model.js";
import * as helpers from "../helpers.js";

const init = () => {
  if (helpers.checkLogin()) {
    DashboardView.render();
    getDashboardDatas();
  } else {
    DashboardView.redirectTo("login");
  }
};

const getDashboardDatas = async () => {
  await model.get("dashboard");

  if (model.state.response.status === 200) {
    DashboardView.renderTotalsSection(model.state.response.data);
    DashboardView.initializeStudentsPerCourseTable(model.state.response.data);
    DashboardView.initializeStudentsPerInstituteTable(
      model.state.response.data
    );
  }
};

init();
