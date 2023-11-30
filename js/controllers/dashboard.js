import DashboardView from "../views/dashboard/dashboard.view.js";
import * as model from "../model.js";
const init = () => {
  DashboardView.render();
  getDashboardDatas();
};

const getDashboardDatas = async () => {
  await model.get("dashboard");

  if (model.state.response.status === 200) {
    DashboardView.renderTotalsSection(model.state.response.data);
    // console.log(model.state.response.data);
    DashboardView.initializeStudentsPerCourseTable(model.state.response.data);
    DashboardView.initializeStudentsPerInstituteTable(model.state.response.data)
  }
};

init();
