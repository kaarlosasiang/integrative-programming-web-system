import InstituteView from "../views/institute/institute.view.js";
import * as model from "../model.js";

const init = async () => {
  InstituteView.render();

  await model.get("/institute.php");

  const res = model.state.response;
  console.log(res);
  if (res.status === 200) {
    InstituteView.initializeTableData(res.data);
  }
};

init();
