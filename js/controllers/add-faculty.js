import AddFacultyView from "../views/add-faculty/add-faculty.view.js";
import * as model from "../model.js";

const init = async () => {
  AddFacultyView.render();
  getInstitutesList();
  getCoursesList();
  AddFacultyView.bindAddFacultyHandler(controlAddFaculty);
};

const controlAddFaculty = async () => {
  const formData = AddFacultyView.getFormData();

  await model.addFaculty(formData);

  console.log(model.state.response);

  if (model.state.response.status === 201) {
    AddFacultyView.clearForm();
    AddFacultyView.showToast("Faculty Added Successfully!", "success");
  } else {
    AddFacultyView.showToast("There was an error!", "error");
  }
};

const getInstitutesList = async () => {
  await model.get("/institute.php");
  const res = model.state.response;

  if (res.status === 200) {
    AddFacultyView.initializeInstitutesDropdown(res.data.data);
  }
};

const getCoursesList = async () => {
  await model.get("/course.php");
  const res = model.state.response;

  if (res.status === 200) {
    AddFacultyView.initializeCoursesDropdown(res.data.data);
  }
};

init();
