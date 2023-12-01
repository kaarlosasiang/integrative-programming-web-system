import InstituteView from "../views/institute/institute.view.js";
import * as model from "../model.js";
import sweetalert2 from "../../assets/js/sweetalert2.js";
import * as helpers from "../helpers.js";

const init = async () => {
  if (helpers.checkLogin()) {
    InstituteView.render();
    InstituteView.bindAddInstituteHandler(controlAddInstitute);

    initializeInstitutesTable();
  } else {
    InstituteView.redirectTo("login");
  }
};

const controlAddInstitute = async () => {
  const formData = InstituteView.getFormData();

  await model.addInstitute(formData);

  console.log(model.state.response);
  if (model.state.response.status === 201) {
    initializeInstitutesTable();
  }
};

const controlDeleteInstitute = async () => {
  const id = InstituteView.getDeleteId();

  await model.deleteInstitute(id);

  console.log(model.state.response);

  if (model.state.response.status === 200) {
    sweetalert2.fire({
      title: "Deleted!",
      text: "Institute has been deleted.",
      icon: "success",
    });
    initializeInstitutesTable();
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

const controlEditInstitute = async () => {
  const { id, title, slug, description } = InstituteView.getEditFormData();

  await model.updateInstitute(id, { title, slug, description });

  console.log(model.state.response);
  if (model.state.response) {
    sweetalert2.fire({
      title: "Updated!",
      text: "Institute has been updated.",
      icon: "success",
    });
    initializeInstitutesTable();
  }
};

const initializeInstitutesTable = async () => {
  await model.get("institute");

  const res = model.state.response;
  if (res.status === 200) {
    InstituteView.initializeTableData(res.data);
    InstituteView.bindDeleteInstituteHandler(controlDeleteInstitute);
    InstituteView.bindEditInstituteHandler(controlEditInstitute);
  }
};

init();
