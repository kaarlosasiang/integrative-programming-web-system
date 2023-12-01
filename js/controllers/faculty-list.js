import FacultyListView from "../views/faculty-list/faculty-list.view.js";
import sweetalert2 from "../../assets/js/sweetalert2.js";
import * as model from "../model.js";
import * as helpers from "../helpers.js";

const init = async () => {
  if (helpers.checkLogin()) {
    FacultyListView.render();
    await model.get("faculty");

    FacultyListView.initializeTableData(model.state.response.data);

    FacultyListView.bindDeleteHandler(controlDeleteFaculty);
  } else {
    FacultyListView.redirectTo("login");
  }
};

const controlDeleteFaculty = async () => {
  const id = FacultyListView.getDeleteId();
  await model.deleteFaculty(id);

  const res = model.state.response;
  if (res.status === 200) {
    sweetalert2.fire({
      title: "Deleted!",
      text: "Student has been deleted.",
      icon: "success",
    });
    await model.get("faculty");
    console.log(model.state.response);
    FacultyListView.initializeTableData(model.state.response.data);
  }
};

init();
