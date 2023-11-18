import FacultyListView from "../views/faculty-list/faculty-list.view.js";
import * as model from "../model.js";

const init = async () => {
  FacultyListView.render();
  await model.get("faculty.php");

  console.log(model.state.response);
  FacultyListView.initializeTableData(model.state.response.data)
};

init();
