import AddFacultyView from "../views/add-faculty/add-faculty.view.js";
import * as model from "../model.js";

const init = async () => {
  AddFacultyView.render();
  AddFacultyView.bindAddFacultyHandler(controlAddFaculty);
};

const controlAddFaculty = async () => {
  const formData = AddFacultyView.getFormData();

  await model.addFaculty(formData);

  console.log(model.state.response);
};

init();
