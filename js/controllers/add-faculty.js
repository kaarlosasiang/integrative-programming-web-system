import AddFacultyView from "../views/add-faculty/add-faculty.view.js";
import * as model from "../model.js";
import * as helpers from "../helpers.js";

const init = async () => {
  if (helpers.checkLogin()) {
    AddFacultyView.render();
    getInstitutesList();
    getCoursesList();
    AddFacultyView.bindAddFacultyHandler(controlAddFaculty);
  } else {
    AddFacultyView.redirectTo("login");
  }
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
  await model.get("/institute");
  const res = model.state.response;

  if (res.status === 200) {
    AddFacultyView.initializeInstitutesDropdown(res.data.data);
  }
};

const getCoursesList = async () => {
  await model.get("/course");
  const res = model.state.response;

  if (res.status === 200) {
    AddFacultyView.initializeCoursesDropdown(res.data.data);
  }
};

init();
