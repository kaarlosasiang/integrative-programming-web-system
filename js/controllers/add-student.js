import AddStudentView from "../views/add-student/add-student.view.js";
import * as model from "../model.js";

const controlRegisterStudent = async () => {
  // get data
  const formData = AddStudentView.getFormData();
  console.log(formData);
  // load data
  await model.registerStudent("/student.php", formData);
  console.log(model.state.response);
};

const init = () => {
  AddStudentView.render();
  AddStudentView.bindFormSubmitHandler(controlRegisterStudent);
  AddStudentView.bindInstituteSelectHandler();
};

init();
