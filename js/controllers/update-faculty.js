import UpdateFacultyView from "../views/update-faculty/update-faculty.view.js";
import * as model from "../model.js";
import * as helpers from "../helpers.js";

const URLparams = new URLSearchParams(window.location.search);
const updateId = URLparams.get("update");

const init = async () => {
  if (helpers.checkLogin()) {
    UpdateFacultyView.render();

    if (updateId) {
      await model.get(`/faculty.php?id=${updateId}`);
      const res = model.state.response;
      console.log(res);
      if (res.status === 200) {
        UpdateFacultyView.initalizeInputValues(res.data);
      } else {
        UpdateFacultyView.showToast("Student do not exist!", "error");
        setTimeout(() => {
          UpdateFacultyView.redirectTo("students-list");
        }, 1000);
      }
    } else {
      UpdateFacultyView.redirectTo("faculty-list");
    }
  } else {
    UpdateFacultyView.redirectTo("login");
  }
};

init();
