import AddStudentView from "../views/add-student/add-student.view.js";
import * as model from "../model.js";

const controlRegisterStudent = async () => {
  // get data
  const formData = AddStudentView.getFormData();
  console.log(formData);
  // load data
  await model.registerStudent("/student.php", formData);
  console.log(model.state.response);
  if (model.state.response.status === 201) {
    AddStudentView.clearFormInputs();
    AddStudentView.showToast("Registered Successfully!", "success");
  }
};

const init = () => {
  AddStudentView.render();
  AddStudentView.bindFormSubmitHandler(controlRegisterStudent);
  AddStudentView.bindInstituteSelectHandler();
};

init();
