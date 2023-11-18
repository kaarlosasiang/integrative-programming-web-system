import UpdateStudentView from "../views/update-student/update-student.view.js";
import * as model from "../model.js";

const URLparams = new URLSearchParams(window.location.search);
const updateId = URLparams.get("update");

const init = async () => {
  UpdateStudentView.render();

  if (updateId) {
    await model.get(`/student.php?id=${updateId}`);
    const res = model.state.response;
    if (res.status === 200) {
      UpdateStudentView.initalizeInputValues(res.data);
    } else {
      UpdateStudentView.showToast("Student do not exist!", "error");
      setTimeout(() => {
        UpdateStudentView.redirectTo("students-list");
      }, 1000);
    }
  } else {
    UpdateStudentView.redirectTo("students-list");
  }

  UpdateStudentView.bindUpdateStudentHandler(controlUpdateStudent);
};

const controlUpdateStudent = async () => {
  // get data
  const formData = UpdateStudentView.getFormData();

  await model.updateStudent(updateId, formData);
  console.log(model.state.response);
  if (model.state.response.status === 201) {
    UpdateStudentView.showToast("Student Updated Successfully!", "success");
    UpdateStudentView.clearFormInputs();
    setTimeout(() => {
      UpdateStudentView.redirectTo("students-list");
    }, 2000);
  } else {
    UpdateStudentView.showToast(model.state.response.message, "error");
  }
};

init();
