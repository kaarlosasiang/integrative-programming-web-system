import coursesView from "../views/courses/courses.view.js";
import * as model from "../model.js";
import * as helpers from "../helpers.js";

const init = () => {
  if (helpers.checkLogin()) {
    coursesView.render();
    getInstitutesList();
    initializeCoursesTable();
    coursesView.bindAddCourseHandler(controlAddCourse);
  } else {
    coursesView.redirectTo("login");
  }
};

const initializeCoursesTable = async () => {
  await model.get("course");

  coursesView.initializeCoursesTable(model.state.response.data);
  coursesView.bindDeleteCoursesHandler(controlDeleteCourse);
};

const controlAddCourse = async () => {
  // get data
  const formData = coursesView.getFormData();

  await model.addCourse(formData);

  console.log(model.state.response);

  if (model.state.response.status === 201) {
    initializeCoursesTable();
  }
};

const controlDeleteCourse = async () => {
  const id = coursesView.getDeleteId();

  await model.deleteCourse(id);

  if (model.state.response.status === 200) {
    sweetalert2.fire({
      title: "Deleted!",
      text: "Course has been deleted.",
      icon: "success",
    });
    initializeCoursesTable();
  } else if (model.state.response.response.status === 400) {
    sweetalert2.fire({
      title: "Error!",
      text: model.state.response.response.data.message,
      icon: "error",
    });
  } else {
    sweetalert2.fire({
      title: "Error!",
      text: "There was an error while deleting!",
      icon: "error",
    });
  }
};

const getInstitutesList = async () => {
  await model.get("/institute");
  const res = model.state.response;

  if (res.status === 200) {
    coursesView.initializeInstitutesDropdown(res.data.data);
  }
};

init();
