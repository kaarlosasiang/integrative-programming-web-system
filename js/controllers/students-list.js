import StudentsListView from "../views/students-list/students-list.view.js";
import sweetalert2 from "https://cdn.jsdelivr.net/npm/sweetalert2@11.10.0/+esm";
import * as model from "../model.js";

const init = async () => {
  StudentsListView.render();

  await getStudentsList();

  handleHttpResponse(model.state.response);

  StudentsListView.bindDeleteHandler(controlDeleteStudent);
};

const getStudentsList = async () => {
  await model.get("/student.php");
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
