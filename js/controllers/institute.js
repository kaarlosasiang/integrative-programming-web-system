import InstituteView from "../views/institute/institute.view.js";
import * as model from "../model.js";
import sweetalert2 from "../../assets/js/sweetalert2.js";

const init = async () => {
  InstituteView.render();
  InstituteView.bindAddInstituteHandler(controlAddInstitute);

  initializeInstitutesTable();
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
  } else {
    sweetalert2.fire({
      title: "Error!",
      text: "There was a problem deleting the Institute!",
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
  await model.get("/institute.php");

  const res = model.state.response;
  if (res.status === 200) {
    InstituteView.initializeTableData(res.data);
    InstituteView.bindDeleteInstituteHandler(controlDeleteInstitute);
    InstituteView.bindEditInstituteHandler(controlEditInstitute);
  }
};

init();
