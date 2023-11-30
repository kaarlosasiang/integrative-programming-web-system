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
  } else {
    AddStudentView.showToast(model.state.response.message, "error");
  }
};

const getInstitutesList = async () => {
  await model.get("institute");
  const res = model.state.response;

  if (res.status === 200) {
    AddStudentView.initializeInstitutesDropdown(res.data.data);
  }
};

const getCoursesList = async () => {
  await model.get("course");
  const res = model.state.response;

  if (res.status === 200) {
    AddStudentView.initializeCoursesDropdown(res.data.data);
  }
};

const init = () => {
  AddStudentView.render();
  getInstitutesList();
  getCoursesList();
  AddStudentView.bindFormSubmitHandler(controlRegisterStudent);
};

init();
