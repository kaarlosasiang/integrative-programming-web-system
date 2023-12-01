import StudentsListView from "../views/students-list/students-list.view.js";
import sweetalert2 from "../../assets/js/sweetalert2.js";
import * as model from "../model.js";
import * as helpers from "../helpers.js";

const init = async () => {
  if (helpers.checkLogin()) {
    StudentsListView.render();

    await getStudentsList();

    handleHttpResponse(model.state.response);

    StudentsListView.bindDeleteHandler(controlDeleteStudent);
  } else {
    StudentsListView.redirectTo("login");
  }
};

const getStudentsList = async () => {
  await model.get("student");
};

const controlDeleteStudent = async () => {
  // get data
  const studentId = StudentsListView.getDeleteId();
  await model.deleteStudent(studentId);

  console.log(model.state.response);
  if (model.state.response.status === 200) {
    sweetalert2.fire({
      title: "Deleted!",
      text: "Student has been deleted.",
      icon: "success",
    });
    await getStudentsList();
    StudentsListView.initializeTableData(model.state.response.data.data);
  }
};

const handleHttpResponse = (res) => {
  if (!res || (Array.isArray(res) && res.length === 0))
    console.log("Response is empty");

  if (res.status === 200) {
    StudentsListView.initializeTableData(res.data.data);
  }
};

init();
