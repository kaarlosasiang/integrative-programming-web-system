import StudentsListView from "../views/students-list/students-list.view.js";
import * as model from "../model.js";

const init = async () => {
  StudentsListView.render();
  await model.get("/student.php");
  handleHttpResponse(model.state.response);
  
  StudentsListView.bindDeleteHandler();
};

const handleHttpResponse = (res) => {
  if (!res || (Array.isArray(res) && res.length === 0))
    console.log("Response is empty");

  if (res.status === 200) {
    StudentsListView.initializeTableData(res.data.data);
  }
};

init();
